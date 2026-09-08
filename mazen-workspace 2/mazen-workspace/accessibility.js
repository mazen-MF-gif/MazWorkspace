/* Accessibility for shared surfaces and dynamically rendered controls. */
const dialogStack = new Map();
const focusableSelector = 'button:not(:disabled),a[href],input:not([type=hidden]),select,textarea,[tabindex="0"]';
function syncAccessibleUI() {
  document.querySelectorAll('button').forEach(button => {
    if (!button.getAttribute('aria-label')) {
      const action = button.getAttribute('onclick') || '';
      const icon = button.querySelector('[data-lucide]')?.getAttribute('data-lucide');
      const label = button.title || (icon === 'x' ? 'إغلاق' : icon === 'trash-2' ? 'حذف المهمة' : action.includes('openAddLectureModal') ? 'إضافة محاضرة' : action.includes('toggleTaskCompletion') ? 'تبديل إنجاز المهمة' : action.includes('changeAbsence') ? (action.includes('-1') ? 'تقليل الغياب' : 'زيادة الغياب') : '');
      if (label) button.setAttribute('aria-label',label);
    }
  });
  document.querySelectorAll('[onclick^="toggleTaskCompletion"]').forEach(b => {
    b.setAttribute('aria-pressed',String(b.classList.contains('bg-emerald-500')));
  });
  document.querySelectorAll('.view-tab-btn,.mobile-nav-btn[id]').forEach(b => {
    if (b.id.endsWith(activeView)) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
  });
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.setAttribute('role','region');
    const heading = panel.querySelector('h2');
    if (heading) { heading.id ||= `${panel.id}-heading`; panel.setAttribute('aria-labelledby',heading.id); }
  });
  document.querySelectorAll('svg').forEach(svg => svg.setAttribute('aria-hidden','true'));
  document.querySelectorAll('label:not([for])').forEach(label => {
    const field = label.parentElement.querySelector('input:not([type=hidden]),select,textarea');
    if (field?.id && !label.querySelector('input')) label.htmlFor = field.id;
  });
  const drawer = document.getElementById('pomodoroDrawer');
  drawer.inert = drawer.classList.contains('pointer-events-none');
  const open = [...document.querySelectorAll('[role=dialog]')].filter(d => !d.classList.contains('hidden'));
  const top = open.find(d => d.id === 'vaultLockScreen') || open.at(-1);
  document.body.style.overflow = top ? 'hidden' : '';
  [...document.body.children].forEach(el => {
    if (['SCRIPT','LINK'].includes(el.tagName)) return;
    if (el.id !== 'pomodoroDrawer') el.inert = !!top && el !== top && el.id !== 'toastContainer';
    else if (top) el.inert = true;
  });
  document.querySelectorAll('[role=dialog]').forEach(dialog => {
    if (open.includes(dialog)) {
      if (!dialogStack.has(dialog)) {
        dialogStack.set(dialog,document.activeElement);
        if (dialog === top) requestAnimationFrame(() => dialog.querySelector('input:not([type=hidden]),textarea,button')?.focus());
      }
    } else if (dialogStack.has(dialog)) {
      const previous = dialogStack.get(dialog); dialogStack.delete(dialog);
      if (!top) requestAnimationFrame(() => (previous?.isConnected && !previous.closest('[inert]') ? previous : document.getElementById('main-content')).focus());
    }
  });
  const backup = document.getElementById('backupMenuBtn');
  backup.setAttribute('aria-expanded',String(!document.getElementById('backupDropdown').classList.contains('hidden')));
  backup.setAttribute('aria-controls','backupDropdown');
}
document.addEventListener('keydown',event => {
  const dialog = [...document.querySelectorAll('[role=dialog]')].find(d => !d.classList.contains('hidden') && !d.inert);
  if (event.key === 'Escape') {
    if (dialog && dialog.id !== 'vaultLockScreen') dialog.classList.add('hidden');
    else if (!dialog) { document.getElementById('backupDropdown').classList.add('hidden'); const drawer = document.getElementById('pomodoroDrawer'); if (!drawer.inert) togglePomodoroDrawer(); }
  }
  if (event.key === 'Tab' && dialog) {
    const items = [...dialog.querySelectorAll(focusableSelector)].filter(el => el.getClientRects().length && !el.disabled);
    const first = items[0], last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }
});
const accessibleObserver = new MutationObserver(syncAccessibleUI);
window.addEventListener('DOMContentLoaded',() => {
  syncAccessibleUI();
  accessibleObserver.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
});
