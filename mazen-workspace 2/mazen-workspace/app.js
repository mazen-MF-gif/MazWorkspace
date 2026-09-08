
    const STORAGE_KEYS = {
      TIMETABLE: 'academic_timetable_v3',
      TASKS: 'academic_tasks_v3',
      ATTENDANCE: 'academic_attendance_v3',
      THEME: 'theme'
    };

    const CLOUD_STORAGE_KEYS = {
      FIREBASE_CONFIG: 'mazen_firebase_config_v1'
    };

    const ACADEMIC_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

    // Official Qassim University Courses
    const INITIAL_LECTURES = [
      {
        id: 'lec-1',
        courseCode: 'COE 434',
        courseName: 'الأنظمة المدمجة (Embedded Systems)',
        room: 'كلية الحاسب',
        instructor: 'أستاذ المقرر',
        day: 'Sunday',
        startTime: '08:00',
        endTime: '09:15',
        color: 'cyan'
      },
      {
        id: 'lec-2',
        courseCode: 'COE 434',
        courseName: 'الأنظمة المدمجة (Embedded Systems)',
        room: 'كلية الحاسب',
        instructor: 'أستاذ المقرر',
        day: 'Sunday',
        startTime: '10:00',
        endTime: '11:15',
        color: 'cyan'
      },
      {
        id: 'lec-3',
        courseCode: 'COE 435',
        courseName: 'معمل الأنظمة المدمجة (Embedded Systems Lab)',
        room: 'معمل الحاسب',
        instructor: 'مشرف المعمل',
        day: 'Sunday',
        startTime: '12:00',
        endTime: '13:40',
        color: 'amber'
      },
      {
        id: 'lec-4',
        courseCode: 'COE 457',
        courseName: 'الحوسبة السحابية (Cloud Computing)',
        room: 'كلية الحاسب',
        instructor: 'أستاذ المقرر',
        day: 'Tuesday',
        startTime: '14:10',
        endTime: '15:25',
        color: 'rose'
      },
      {
        id: 'lec-5',
        courseCode: 'COE 457',
        courseName: 'الحوسبة السحابية (Cloud Computing)',
        room: 'كلية الحاسب',
        instructor: 'أستاذ المقرر',
        day: 'Thursday',
        startTime: '14:10',
        endTime: '15:25',
        color: 'rose'
      }
    ];

    const INITIAL_TASKS = [
      {
        id: 'task-1',
        title: 'مراجعة تجارب معمل الأنظمة المدمجة COE 435',
        category: 'Academic',
        priority: 'High',
        completed: false
      },
      {
        id: 'task-2',
        title: 'قراءة ملخص المحاضرة الأولى لمقرر الحوسبة السحابية COE 457',
        category: 'Academic',
        priority: 'Medium',
        completed: false
      },
      {
        id: 'task-3',
        title: 'تطوير وتدريب نموذج مشروع التخرج (Senior Project)',
        category: 'Project',
        priority: 'Urgent',
        completed: false
      },
      {
        id: 'task-4',
        title: 'حل واجب معمارية المتحكمات لمقرر الأنظمة المدمجة COE 434',
        category: 'Academic',
        priority: 'Medium',
        completed: false
      }
    ];

    // Attendance data (DN limit 25% = approx 4 lectures)
    const INITIAL_ATTENDANCE = {
      'COE 434': { absences: 0, maxAllowed: 4, name: 'الأنظمة المدمجة' },
      'COE 435': { absences: 0, maxAllowed: 2, name: 'معمل الأنظمة المدمجة' },
      'COE 457': { absences: 0, maxAllowed: 4, name: 'الحوسبة السحابية' }
    };

    // Semester 481 - 20 Weeks Dataset
    const SEMESTER_481_WEEKS = [
      {
        weekNum: 1, title: "الأسبوع 1", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/3/10", greg: "2026-08-23" },
          { dayName: "Monday", hijri: "1448/3/11", greg: "2026-08-24" },
          { dayName: "Tuesday", hijri: "1448/3/12", greg: "2026-08-25" },
          { dayName: "Wednesday", hijri: "1448/3/13", greg: "2026-08-26" },
          { dayName: "Thursday", hijri: "1448/3/14", greg: "2026-08-27" }
        ]
      },
      {
        weekNum: 2, title: "الأسبوع 2", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/3/17", greg: "2026-08-30" },
          { dayName: "Monday", hijri: "1448/3/18", greg: "2026-08-31" },
          { dayName: "Tuesday", hijri: "1448/3/19", greg: "2026-09-01" },
          { dayName: "Wednesday", hijri: "1448/3/20", greg: "2026-09-02" },
          { dayName: "Thursday", hijri: "1448/3/21", greg: "2026-09-03" }
        ]
      },
      {
        weekNum: 3, title: "الأسبوع 3", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/3/24", greg: "2026-09-06" },
          { dayName: "Monday", hijri: "1448/3/25", greg: "2026-09-07" },
          { dayName: "Tuesday", hijri: "1448/3/26", greg: "2026-09-08" },
          { dayName: "Wednesday", hijri: "1448/3/27", greg: "2026-09-09" },
          { dayName: "Thursday", hijri: "1448/3/28", greg: "2026-09-10" }
        ]
      },
      {
        weekNum: 4, title: "الأسبوع 4", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/4/2", greg: "2026-09-13" },
          { dayName: "Monday", hijri: "1448/4/3", greg: "2026-09-14" },
          { dayName: "Tuesday", hijri: "1448/4/4", greg: "2026-09-15" },
          { dayName: "Wednesday", hijri: "1448/4/5", greg: "2026-09-16" },
          { dayName: "Thursday", hijri: "1448/4/6", greg: "2026-09-17" }
        ]
      },
      {
        weekNum: 5, title: "الأسبوع 5", type: "holiday",
        days: [
          { dayName: "Sunday", hijri: "1448/4/9", greg: "2026-09-20" },
          { dayName: "Monday", hijri: "1448/4/10", greg: "2026-09-21" },
          { dayName: "Tuesday", hijri: "1448/4/11", greg: "2026-09-22" },
          { dayName: "Wednesday", hijri: "1448/4/12", greg: "2026-09-23", isHoliday: true, holidayNote: "إجازة اليوم الوطني" },
          { dayName: "Thursday", hijri: "1448/4/13", greg: "2026-09-24", isHoliday: true, holidayNote: "إجازة اليوم الوطني" }
        ]
      },
      {
        weekNum: 6, title: "الأسبوع 6", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/4/16", greg: "2026-09-27" },
          { dayName: "Monday", hijri: "1448/4/17", greg: "2026-09-28" },
          { dayName: "Tuesday", hijri: "1448/4/18", greg: "2026-09-29" },
          { dayName: "Wednesday", hijri: "1448/4/19", greg: "2026-09-30" },
          { dayName: "Thursday", hijri: "1448/4/20", greg: "2026-10-01" }
        ]
      },
      {
        weekNum: 7, title: "الأسبوع 7", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/4/23", greg: "2026-10-04" },
          { dayName: "Monday", hijri: "1448/4/24", greg: "2026-10-05" },
          { dayName: "Tuesday", hijri: "1448/4/25", greg: "2026-10-06" },
          { dayName: "Wednesday", hijri: "1448/4/26", greg: "2026-10-07" },
          { dayName: "Thursday", hijri: "1448/4/27", greg: "2026-10-08" }
        ]
      },
      {
        weekNum: 8, title: "الأسبوع 8", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/4/30", greg: "2026-10-11" },
          { dayName: "Monday", hijri: "1448/5/1", greg: "2026-10-12" },
          { dayName: "Tuesday", hijri: "1448/5/2", greg: "2026-10-13" },
          { dayName: "Wednesday", hijri: "1448/5/3", greg: "2026-10-14" },
          { dayName: "Thursday", hijri: "1448/5/4", greg: "2026-10-15" }
        ]
      },
      {
        weekNum: 9, title: "الأسبوع 9", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/5/7", greg: "2026-10-18" },
          { dayName: "Monday", hijri: "1448/5/8", greg: "2026-10-19" },
          { dayName: "Tuesday", hijri: "1448/5/9", greg: "2026-10-20" },
          { dayName: "Wednesday", hijri: "1448/5/10", greg: "2026-10-21" },
          { dayName: "Thursday", hijri: "1448/5/11", greg: "2026-10-22" }
        ]
      },
      {
        weekNum: 10, title: "الأسبوع 10", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/5/14", greg: "2026-10-25" },
          { dayName: "Monday", hijri: "1448/5/15", greg: "2026-10-26" },
          { dayName: "Tuesday", hijri: "1448/5/16", greg: "2026-10-27" },
          { dayName: "Wednesday", hijri: "1448/5/17", greg: "2026-10-28" },
          { dayName: "Thursday", hijri: "1448/5/18", greg: "2026-10-29" }
        ]
      },
      {
        weekNum: 11, title: "الأسبوع 11", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/5/21", greg: "2026-11-01" },
          { dayName: "Monday", hijri: "1448/5/22", greg: "2026-11-02" },
          { dayName: "Tuesday", hijri: "1448/5/23", greg: "2026-11-03" },
          { dayName: "Wednesday", hijri: "1448/5/24", greg: "2026-11-04" },
          { dayName: "Thursday", hijri: "1448/5/25", greg: "2026-11-05" }
        ]
      },
      {
        weekNum: 12, title: "الأسبوع 12", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/5/28", greg: "2026-11-08" },
          { dayName: "Monday", hijri: "1448/5/29", greg: "2026-11-09" },
          { dayName: "Tuesday", hijri: "1448/5/30", greg: "2026-11-10" },
          { dayName: "Wednesday", hijri: "1448/6/1", greg: "2026-11-11" },
          { dayName: "Thursday", hijri: "1448/6/2", greg: "2026-11-12" }
        ]
      },
      {
        weekNum: 13, title: "الأسبوع 13", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/6/5", greg: "2026-11-15" },
          { dayName: "Monday", hijri: "1448/6/6", greg: "2026-11-16" },
          { dayName: "Tuesday", hijri: "1448/6/7", greg: "2026-11-17" },
          { dayName: "Wednesday", hijri: "1448/6/8", greg: "2026-11-18" },
          { dayName: "Thursday", hijri: "1448/6/9", greg: "2026-11-19" }
        ]
      },
      {
        weekNum: 14, title: "الأسبوع 14", type: "holiday",
        days: [
          { dayName: "Sunday", hijri: "1448/6/12", greg: "2026-11-22", isHoliday: true, holidayNote: "إجازة منتصف الفصل" },
          { dayName: "Monday", hijri: "1448/6/13", greg: "2026-11-23", isHoliday: true, holidayNote: "إجازة منتصف الفصل" },
          { dayName: "Tuesday", hijri: "1448/6/14", greg: "2026-11-24", isHoliday: true, holidayNote: "إجازة منتصف الفصل" },
          { dayName: "Wednesday", hijri: "1448/6/15", greg: "2026-11-25", isHoliday: true, holidayNote: "إجازة منتصف الفصل" },
          { dayName: "Thursday", hijri: "1448/6/16", greg: "2026-11-26", isHoliday: true, holidayNote: "إجازة منتصف الفصل" }
        ]
      },
      {
        weekNum: 15, title: "الأسبوع 15", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/6/19", greg: "2026-11-29" },
          { dayName: "Monday", hijri: "1448/6/20", greg: "2026-11-30" },
          { dayName: "Tuesday", hijri: "1448/6/21", greg: "2026-12-01" },
          { dayName: "Wednesday", hijri: "1448/6/22", greg: "2026-12-02" },
          { dayName: "Thursday", hijri: "1448/6/23", greg: "2026-12-03" }
        ]
      },
      {
        weekNum: 16, title: "الأسبوع 16", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/6/26", greg: "2026-12-06" },
          { dayName: "Monday", hijri: "1448/6/27", greg: "2026-12-07" },
          { dayName: "Tuesday", hijri: "1448/6/28", greg: "2026-12-08" },
          { dayName: "Wednesday", hijri: "1448/6/29", greg: "2026-12-09" },
          { dayName: "Thursday", hijri: "1448/7/1", greg: "2026-12-10" }
        ]
      },
      {
        weekNum: 17, title: "الأسبوع 17", type: "regular",
        days: [
          { dayName: "Sunday", hijri: "1448/7/4", greg: "2026-12-13" },
          { dayName: "Monday", hijri: "1448/7/5", greg: "2026-12-14" },
          { dayName: "Tuesday", hijri: "1448/7/6", greg: "2026-12-15" },
          { dayName: "Wednesday", hijri: "1448/7/7", greg: "2026-12-16" },
          { dayName: "Thursday", hijri: "1448/7/8", greg: "2026-12-17" }
        ]
      },
      {
        weekNum: 18, title: "الأسبوع 18 (الاختبارات)", type: "exam",
        days: [
          { dayName: "Sunday", hijri: "1448/7/11", greg: "2026-12-20", isExam: true },
          { dayName: "Monday", hijri: "1448/7/12", greg: "2026-12-21", isExam: true },
          { dayName: "Tuesday", hijri: "1448/7/13", greg: "2026-12-22", isExam: true },
          { dayName: "Wednesday", hijri: "1448/7/14", greg: "2026-12-23", isExam: true },
          { dayName: "Thursday", hijri: "1448/7/15", greg: "2026-12-24", isExam: true }
        ]
      },
      {
        weekNum: 19, title: "الأسبوع 19 (الاختبارات)", type: "exam",
        days: [
          { dayName: "Sunday", hijri: "1448/7/18", greg: "2026-12-27", isExam: true },
          { dayName: "Monday", hijri: "1448/7/19", greg: "2026-12-28", isExam: true },
          { dayName: "Tuesday", hijri: "1448/7/20", greg: "2026-12-29", isExam: true },
          { dayName: "Wednesday", hijri: "1448/7/21", greg: "2026-12-30", isExam: true },
          { dayName: "Thursday", hijri: "1448/7/22", greg: "2026-12-31", isExam: true }
        ]
      },
      {
        weekNum: 20, title: "الأسبوع 20 (الاختبارات)", type: "exam",
        days: [
          { dayName: "Sunday", hijri: "1448/7/25", greg: "2027-01-03", isExam: true },
          { dayName: "Monday", hijri: "1448/7/26", greg: "2027-01-04", isExam: true },
          { dayName: "Tuesday", hijri: "1448/7/27", greg: "2027-01-05", isExam: true },
          { dayName: "Wednesday", hijri: "1448/7/28", greg: "2027-01-06", isExam: true },
          { dayName: "Thursday", hijri: "1448/7/29", greg: "2027-01-07", isExam: true }
        ]
      }
    ];

    let lectures = [];
    let tasks = [];
    let attendance = {};
    let activeView = 'timetable';
    let activeTimelineDay = 'Sunday';
    let selectedMobileDay = 'Sunday';
    let currentTaskFilter = 'all';

    // Firebase state
    let firebaseDb = null;
    let isCloudConnected = false;
    let cloudUnsubscribe = null;
    let isIncomingCloudUpdate = false;
    let cloudPushTimeout = null;
    let lastToastTime = 0;

    // Pomodoro state
    let pomodoroState = {
      mode: 'work',
      duration: 25 * 60,
      timeLeft: 25 * 60,
      isRunning: false,
      intervalId: null,
      sessionsCompleted: 0
    };

    window.addEventListener('DOMContentLoaded', () => {
      initTheme();
      initSecurityVault();
      loadState();
      initLiveClocks();
      initTimetableGrid();
      renderAll();
      initLucide();
    });

    
    /* ==========================================================================
       Zero-Knowledge Client-Side Cryptographic Vault (AES-GCM-256 + PBKDF2)
       No password or PIN is stored in the source code or in plain text anywhere!
       ========================================================================== */
    const VAULT_KEYS = {
      SALT: 'mazen_vault_salt_v1',
      VERIFIER: 'mazen_vault_verifier_v1',
      ENCRYPTED_PAYLOAD: 'mazen_vault_payload_v1',
      IS_SETUP: 'mazen_vault_is_setup_v1'
    };

    let activeSessionPin = null;
    let isVaultUnlocked = false;

    // Helper: Buffer to Hex & Hex to Buffer
    function buf2hex(buffer) {
      return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
    }

    function hex2buf(hex) {
      const bytes = new Uint8Array(Math.ceil(hex.length / 2));
      for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
      return bytes.buffer;
    }

    // Derive AES-GCM 256 key from PIN and Salt via 100,000 PBKDF2 iterations
    async function deriveCryptoKey(pin, saltBytes) {
      const enc = new TextEncoder();
      const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        enc.encode(pin),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
      );

      return await window.crypto.subtle.deriveKey(
        {
          name: "PBKDF2",
          salt: saltBytes,
          iterations: 100000,
          hash: "SHA-256"
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt", "decrypt"]
      );
    }

    // Encrypt arbitrary object with AES-GCM
    async function encryptObject(obj, pin, saltHex = null) {
      const enc = new TextEncoder();
      const saltBytes = saltHex ? new Uint8Array(hex2buf(saltHex)) : window.crypto.getRandomValues(new Uint8Array(16));
      const iv = window.crypto.getRandomValues(new Uint8Array(12));

      const key = await deriveCryptoKey(pin, saltBytes);
      const plainBytes = enc.encode(JSON.stringify(obj));

      const cipherBuffer = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        key,
        plainBytes
      );

      return {
        salt: buf2hex(saltBytes),
        iv: buf2hex(iv),
        ciphertext: buf2hex(cipherBuffer)
      };
    }

    // Decrypt AES-GCM package
    async function decryptObject(encryptedPkg, pin) {
      const dec = new TextDecoder();
      const saltBytes = new Uint8Array(hex2buf(encryptedPkg.salt));
      const iv = new Uint8Array(hex2buf(encryptedPkg.iv));
      const cipherBytes = hex2buf(encryptedPkg.ciphertext);

      const key = await deriveCryptoKey(pin, saltBytes);
      const decryptedBuffer = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        key,
        cipherBytes
      );

      return JSON.parse(dec.decode(decryptedBuffer));
    }

    // Check Vault State on Startup
    async function initSecurityVault() {
      const isSetup = localStorage.getItem(VAULT_KEYS.IS_SETUP);
      const lockScreen = document.getElementById('vaultLockScreen');
      const title = document.getElementById('lockScreenTitle');
      const subtitle = document.getElementById('lockScreenSubtitle');
      const submitText = document.getElementById('lockSubmitText');
      const input = document.getElementById('vaultPinInput');

      if (!isSetup) {
        // First Time User: Prompt to create a private PIN
        title.textContent = 'تعيين رمز الحماية والتشفير';
        subtitle.textContent = 'أنشئ رمز مرور (PIN) خاص بك لحماية بياناتك وتشفيرها بتشفير AES-256.';
        submitText.textContent = 'تأكيد الرمز وبدء الاستخدام';
      } else {
        title.textContent = 'مساحة مازن المحمية';
        subtitle.textContent = 'أدخل رمز المرور لفك تشفير جدولك ومهامك اليومية.';
        submitText.textContent = 'فتح وتفكيك التشفير';
      }

      lockScreen.classList.remove('hidden');
      if (input) setTimeout(() => input.focus(), 150);
    }

    async function handleUnlockOrSetup() {
      if (document.getElementById('lockScreenSubmitBtn').disabled) return;
      const input = document.getElementById('vaultPinInput');
      const errEl = document.getElementById('lockScreenError');
      const pin = input.value.trim();

      if (!pin || pin.length < 4) {
        errEl.textContent = 'يرجى إدخال رمز مكون من 4 خانات على الأقل.';
        return;
      }

      if (!window.crypto?.subtle) { errEl.textContent = 'افتح الموقع عبر HTTPS أو localhost لتفعيل التشفير.'; return; }
      document.getElementById('lockScreenSubmitBtn').disabled = true;
      errEl.textContent = 'جاري التحقق وفك التشفير...';

      const isSetup = localStorage.getItem(VAULT_KEYS.IS_SETUP);

      if (!isSetup) {
        // First time Setup: Create Verifier & Encrypt Initial Workspace
        try {
          const verifierPkg = await encryptObject({ verify: "OK_MAZEN_WORKSPACE" }, pin);
          localStorage.setItem(VAULT_KEYS.VERIFIER, JSON.stringify(verifierPkg));


          activeSessionPin = pin;
          isVaultUnlocked = true;

          // Encrypt initial state to vault
          await saveEncryptedWorkspace();
          localStorage.setItem(VAULT_KEYS.IS_SETUP, 'true');

          document.getElementById('vaultLockScreen').classList.add('hidden');
          input.value = '';
          errEl.textContent = '';
          initFirebaseSync();
          showToast('تم تعيين رمز المرور وتشفير مساحة العمل بنجاح', 'shield-check');
        } catch (e) {
          activeSessionPin = null; isVaultUnlocked = false;
          errEl.textContent = 'حدث خطأ أثناء تشفير البيانات.';
        }
      } else {
        // Unlock Attempt: Verify PIN against encrypted verifier
        try {
          const storedVerifier = JSON.parse(localStorage.getItem(VAULT_KEYS.VERIFIER));
          const decrypted = await decryptObject(storedVerifier, pin);

          if (decrypted && decrypted.verify === "OK_MAZEN_WORKSPACE") {
            activeSessionPin = pin;
            isVaultUnlocked = true;

            // Load encrypted data if present
            const storedPayload = localStorage.getItem(VAULT_KEYS.ENCRYPTED_PAYLOAD);
            if (storedPayload) {
              const decryptedData = await decryptObject(JSON.parse(storedPayload), pin);
              if (decryptedData.lectures) lectures = decryptedData.lectures;
              if (decryptedData.tasks) tasks = decryptedData.tasks;
              if (decryptedData.attendance) attendance = decryptedData.attendance;
              if ([STORAGE_KEYS.TIMETABLE, STORAGE_KEYS.TASKS, STORAGE_KEYS.ATTENDANCE].some(key => localStorage.getItem(key))) loadState();
              await saveEncryptedWorkspace();
              renderAll();
            }

            document.getElementById('vaultLockScreen').classList.add('hidden');
            input.value = '';
            errEl.textContent = '';
            initFirebaseSync();
            showToast('تم فك التشفير وفتح مساحة العمل بنجاح', 'unlock');
          } else {
            errEl.textContent = 'رمز المرور غير صحيح.';
          }
        } catch (e) {
          activeSessionPin = null; isVaultUnlocked = false;
          errEl.textContent = 'رمز المرور غير صحيح أو تعذر قراءة البيانات.';
          input.classList.add('ring-2', 'ring-rose-500');
          setTimeout(() => input.classList.remove('ring-2', 'ring-rose-500'), 1000);
        }
      }
      document.getElementById('lockScreenSubmitBtn').disabled = false;
    }

    let vaultSaveQueue = Promise.resolve();
    function saveEncryptedWorkspace() {
      if (!activeSessionPin || !isVaultUnlocked) return Promise.resolve(null);
      const pin = activeSessionPin;
      const payload = JSON.parse(JSON.stringify({ lectures, tasks, attendance }));
      const operation = vaultSaveQueue.then(async () => {
        const encrypted = await encryptObject(payload, pin);
        localStorage.setItem(VAULT_KEYS.ENCRYPTED_PAYLOAD, JSON.stringify(encrypted));
        [STORAGE_KEYS.TIMETABLE, STORAGE_KEYS.TASKS, STORAGE_KEYS.ATTENDANCE].forEach(key => localStorage.removeItem(key));
        return encrypted;
      });
      vaultSaveQueue = operation.catch(() => {});
      return operation;
    }

    async function lockVaultNow() {
      try { await saveEncryptedWorkspace(); }
      catch { showToast('تعذر حفظ البيانات. حاول القفل مرة أخرى.'); return; }
      clearTimeout(cloudPushTimeout);
      if (cloudUnsubscribe) { cloudUnsubscribe(); cloudUnsubscribe = null; }
      activeSessionPin = null;
      isVaultUnlocked = false;
      document.getElementById('vaultPinInput').value = '';
      initSecurityVault();
    }

    function initLucide() {
      if (window.lucide) window.lucide.createIcons();
    }

    function initTheme() {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      updateThemeIcons();
    }

    function toggleTheme() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
      updateThemeIcons();
      showToast(isDark ? 'تم تفعيل الوضع الليلي' : 'تم تفعيل الوضع النهاري', 'moon');
    }

    function updateThemeIcons() {
      const isDark = document.documentElement.classList.contains('dark');
      const sunIcon = document.getElementById('sunIcon');
      const moonIcon = document.getElementById('moonIcon');
      if (sunIcon && moonIcon) {
        if (isDark) {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    }

    function loadState() {
      try {
        const storedLec = localStorage.getItem(STORAGE_KEYS.TIMETABLE);
        lectures = storedLec ? JSON.parse(storedLec) : [...INITIAL_LECTURES];

        const storedTasks = localStorage.getItem(STORAGE_KEYS.TASKS);
        tasks = storedTasks ? JSON.parse(storedTasks) : [...INITIAL_TASKS];

        const storedAtt = localStorage.getItem(STORAGE_KEYS.ATTENDANCE);
        attendance = storedAtt ? JSON.parse(storedAtt) : JSON.parse(JSON.stringify(INITIAL_ATTENDANCE));
      } catch (e) {
        lectures = [...INITIAL_LECTURES];
        tasks = [...INITIAL_TASKS];
        attendance = JSON.parse(JSON.stringify(INITIAL_ATTENDANCE));
      }
    }

    function persistLectures() {
      saveEncryptedWorkspace().catch(() => showToast('تعذر حفظ التعديل على هذا الجهاز.'));
      if (!isIncomingCloudUpdate && typeof debouncedPushToCloud === 'function') {
        debouncedPushToCloud();
      }
    }

    function persistTasks() {
      saveEncryptedWorkspace().catch(() => showToast('تعذر حفظ التعديل على هذا الجهاز.'));
      if (!isIncomingCloudUpdate && typeof debouncedPushToCloud === 'function') {
        debouncedPushToCloud();
      }
    }

    function persistAttendance() {
      saveEncryptedWorkspace().catch(() => showToast('تعذر حفظ التعديل على هذا الجهاز.'));
      if (!isIncomingCloudUpdate && typeof debouncedPushToCloud === 'function') {
        debouncedPushToCloud();
      }
    }

    function initLiveClocks() {
      updateLiveClocks();
      setInterval(updateLiveClocks, 1000);
    }

    function toLatinDigits(str) {
      if (str === null || str === undefined) return '';
      return String(str).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    }

    function formatTime12h(time24) {
      if (!time24) return '';
      const [hStr, mStr] = time24.split(':');
      let h = parseInt(hStr, 10);
      const m = mStr || '00';
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12;
      if (h === 0) h = 12;
      return `${String(h).padStart(2, '0')}:${m} ${ampm}`;
    }

    function updateLiveClocks() {
      const now = new Date();
      // Pure English 12-hour clock (e.g. 11:45:20 PM)
      const timeStr = toLatinDigits(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
      }));

      // Arabic day/month name with English numbers (e.g. الثلاثاء، 8 سبتمبر 2026)
      const dateStr = toLatinDigits(now.toLocaleDateString('ar-SA-u-ca-gregory-nu-latn', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }));
      
      const timeEl = document.getElementById('currentTimeDisplay');
      const dateEl = document.getElementById('currentDateDisplay');
      if (timeEl) timeEl.textContent = timeStr;
      if (dateEl) dateEl.textContent = dateStr;

      updateUpNextCard(now);
    }

    function updateUpNextCard(now) {
      if (!lectures || lectures.length === 0) {
        renderEmptyUpNext('لا توجد محاضرات في جدولك');
        return;
      }

      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDayIndex = now.getDay();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      let ongoingLecture = null;
      let nextLecture = null;
      let smallestDiff = Infinity;

      for (let offset = 0; offset <= 7; offset++) {
        const checkDayIndex = (currentDayIndex + offset) % 7;
        const checkDayName = dayNames[checkDayIndex];
        if (!ACADEMIC_DAYS.includes(checkDayName)) continue;

        const dayLectures = lectures.filter(l => l.day === checkDayName);
        for (const lec of dayLectures) {
          const [startH, startM] = lec.startTime.split(':').map(Number);
          const [endH, endM] = lec.endTime.split(':').map(Number);
          const startMin = startH * 60 + startM;
          const endMin = endH * 60 + endM;

          if (offset === 0) {
            if (currentMinutes >= startMin && currentMinutes < endMin) {
              ongoingLecture = { lecture: lec, endsInMin: endMin - currentMinutes };
              break;
            } else if (startMin > currentMinutes) {
              const diff = startMin - currentMinutes;
              if (diff < smallestDiff) {
                smallestDiff = diff;
                nextLecture = { lecture: lec, offsetDays: 0, startsInMin: diff };
              }
            }
          } else {
            const totalDiff = offset * 24 * 60 + (startMin - currentMinutes);
            if (totalDiff < smallestDiff) {
              smallestDiff = totalDiff;
              nextLecture = { lecture: lec, offsetDays: offset, startsInMin: totalDiff };
            }
          }
        }
        if (ongoingLecture) break;
        if (nextLecture && offset > 0) break;
      }

      const statusLabel = document.getElementById('upNextStatusLabel');
      const countdownChip = document.getElementById('upNextCountdownChip');
      const courseCodeEl = document.getElementById('upNextCourseCode');
      const courseNameEl = document.getElementById('upNextCourseName');
      const roomEl = document.getElementById('upNextRoom');
      const timeEl = document.getElementById('upNextTime');

      if (ongoingLecture) {
        const lec = ongoingLecture.lecture;
        statusLabel.textContent = 'المحاضرة جارية الآن';
        countdownChip.textContent = `${ongoingLecture.endsInMin}m left`;
        countdownChip.className = 'px-2.5 py-1 rounded-xl text-sm font-mono font-bold bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 border border-rose-200';
        courseCodeEl.textContent = lec.courseCode;
        courseNameEl.textContent = lec.courseName;
        document.getElementById('upNextInstructor').textContent = lec.instructor || 'أستاذ المقرر';
        roomEl.textContent = lec.room || 'كلية الحاسب';
        timeEl.textContent = `${toLatinDigits(lec.startTime)} - ${toLatinDigits(lec.endTime)}`;
      } else if (nextLecture) {
        const lec = nextLecture.lecture;
        const totalMinutes = nextLecture.startsInMin;
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        
        statusLabel.textContent = nextLecture.offsetDays === 0 ? 'المحاضرة القادمة اليوم' : `المحاضرة القادمة (${getDayArabic(lec.day)})`;
        countdownChip.textContent = hours > 0 ? `Starts in ${hours}h ${mins}m` : `Starts in ${mins}m`;
        countdownChip.className = 'px-2.5 py-1 rounded-xl text-sm font-mono font-bold bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200';
        courseCodeEl.textContent = lec.courseCode;
        courseNameEl.textContent = lec.courseName;
        document.getElementById('upNextInstructor').textContent = lec.instructor || 'أستاذ المقرر';
        roomEl.textContent = lec.room || 'كلية الحاسب';
        timeEl.textContent = `${toLatinDigits(lec.startTime)} - ${toLatinDigits(lec.endTime)}`;
      } else {
        renderEmptyUpNext('انتهت محاضرات الأسبوع');
      }
    }

    function renderEmptyUpNext(msg) {
      document.getElementById('upNextStatusLabel').textContent = 'لا توجد محاضرات';
      document.getElementById('upNextCountdownChip').textContent = 'وقت حر';
      document.getElementById('upNextCourseCode').textContent = msg;
      document.getElementById('upNextCourseName').textContent = 'استمتع بوقتك أو ركز على مشروع التخرج.';
      ['upNextRoom', 'upNextInstructor', 'upNextTime'].forEach(id => document.getElementById(id).textContent = '—');
    }

    function getDayArabic(day) {
      const map = { Sunday: 'الأحد', Monday: 'الاثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس' };
      return map[day] || day;
    }

    function getColorClasses(color) {
      const map = {
        cyan: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
        amber: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
        rose: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800',
        indigo: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
        emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
      };
      return map[color] || map['cyan'];
    }

    // Timetable Rendering (Mobile Day Cards + Desktop Grid)
    function initTimetableGrid() {
      const gridBody = document.getElementById('timetableGridBody');
      if (!gridBody) return;
      gridBody.innerHTML = '';

      const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
      hours.forEach((hStr) => {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-6 min-h-[80px] hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors';
        
        const timeCell = document.createElement('div');
        timeCell.className = 'p-2.5 border-l border-slate-200 dark:border-slate-800 text-center font-mono text-[12px] text-slate-500 dark:text-slate-500 bg-slate-50/40 dark:bg-slate-900/40 flex items-start justify-center pt-2';
        timeCell.textContent = hStr;
        row.appendChild(timeCell);

        ACADEMIC_DAYS.forEach((day, dIdx) => {
          const dayCell = document.createElement('div');
          dayCell.className = `p-1.5 border-l border-slate-200/80 dark:border-slate-800/80 relative ${dIdx === 4 ? 'border-l-0' : ''}`;
          dayCell.id = `cell-${day}-${hStr.replace(':', '')}`;
          dayCell.addEventListener('dblclick', () => openAddLectureModal({ day, startTime: hStr }));
          row.appendChild(dayCell);
        });

        gridBody.appendChild(row);
      });
    }

    function renderTimetableLectures() {
      const cells = document.querySelectorAll('[id^="cell-"]');
      cells.forEach(c => c.innerHTML = '');

      lectures.forEach(lec => {
        const startHour = lec.startTime.split(':')[0] + ':00';
        const cell = document.getElementById(`cell-${lec.day}-${startHour.replace(':', '')}`);
        if (cell) {
          const card = document.createElement('button');
          card.type = 'button';
          card.className = `w-full p-2 rounded-xl border text-right cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all mb-1.5 shadow-xs ${getColorClasses(lec.color)}`;
          card.onclick = () => openEditLectureModal(lec.id);
          card.innerHTML = `
            <div class="flex items-center justify-between mb-0.5">
              <span class="font-black font-mono text-[12px]">${escapeHTML(lec.courseCode)}</span>
              <span class="font-mono text-[12px] opacity-75">${lec.startTime}</span>
            </div>
            <div class="font-bold text-[12px] truncate">${escapeHTML(lec.courseName)}</div>
            <div class="flex items-center justify-between text-[12px] opacity-75 mt-0.5">
              <span class="truncate">${escapeHTML(lec.room || 'كلية الحاسب')}</span>
              <span>${lec.endTime}</span>
            </div>
          `;
          cell.appendChild(card);
        }
      });

      renderMobileDayView();
    }

    function setMobileTimetableMode(mode) {
      const dayView = document.getElementById('mobileDayViewContainer');
      const gridView = document.getElementById('desktopGridContainer');
      const btnDay = document.getElementById('btnMobileViewDay');
      const btnGrid = document.getElementById('btnMobileViewGrid');

      if (mode === 'day') {
        dayView.classList.remove('hidden');
        dayView.classList.add('block');
        gridView.classList.remove('block');
        gridView.classList.add('hidden', 'md:block');
        btnDay.className = 'px-3 py-1 rounded-lg font-bold bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 shadow-xs';
        btnGrid.className = 'px-3 py-1 rounded-lg font-medium text-slate-600 dark:text-slate-500';
      } else {
        dayView.classList.remove('block');
        dayView.classList.add('hidden');
        gridView.classList.remove('hidden');
        gridView.classList.add('block');
        btnGrid.className = 'px-3 py-1 rounded-lg font-bold bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 shadow-xs';
        btnDay.className = 'px-3 py-1 rounded-lg font-medium text-slate-600 dark:text-slate-500';
      }
    }

    function selectMobileDay(day) {
      selectedMobileDay = day;
      document.querySelectorAll('.mobile-day-pill').forEach(pill => {
        if (pill.dataset.day === day) {
          pill.className = 'mobile-day-pill flex-1 py-2 px-3 rounded-xl text-sm font-bold text-center transition-all bg-brand-600 text-white shadow-sm';
        } else {
          pill.className = 'mobile-day-pill flex-1 py-2 px-3 rounded-xl text-sm font-semibold text-center transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-500';
        }
      });
      renderMobileDayView();
    }

    function renderMobileDayView() {
      const container = document.getElementById('mobileDayLecturesList');
      if (!container) return;
      container.innerHTML = '';

      const dayLectures = lectures.filter(l => l.day === selectedMobileDay)
        .sort((a, b) => a.startTime.localeCompare(b.startTime));

      if (dayLectures.length === 0) {
        container.innerHTML = `
          <div class="p-6 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center text-slate-500">
            <i data-lucide="coffee" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
            <p class="text-sm font-bold">يوم دراسة ذاتية / لا توجد محاضرات</p>
            <p class="text-[12px] mt-1">فرصة ذهبية للعمل على مشروع التخرج ومراجعة المعامل.</p>
          </div>
        `;
        initLucide();
        return;
      }

      dayLectures.forEach(lec => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = `w-full text-right p-4 rounded-2xl border shadow-apple-card dark:shadow-apple-card-dark ${getColorClasses(lec.color)} active:scale-[0.98] transition-transform`;
        item.onclick = () => openEditLectureModal(lec.id);
        item.innerHTML = `
          <div class="flex items-center justify-between mb-1">
            <span class="font-black font-mono text-sm">${escapeHTML(lec.courseCode)}</span>
            <span class="font-mono text-sm font-bold">${lec.startTime} - ${lec.endTime}</span>
          </div>
          <h3 class="font-bold text-sm text-slate-900 dark:text-white mb-2">${escapeHTML(lec.courseName)}</h3>
          <div class="flex items-center justify-between text-sm opacity-80 pt-1 border-t border-current/10">
            <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${escapeHTML(lec.room || 'كلية الحاسب')}</span>
            <span class="text-[12px] font-bold">تعديل &larr;</span>
          </div>
        `;
        container.appendChild(item);
      });

      initLucide();
    }

    // Semester 481 Calendar with Stroke
    function renderSemesterCalendar() {
      const container = document.getElementById('semesterWeeksList');
      if (!container) return;
      container.innerHTML = '';

      const now = new Date();
      const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

      let passedDaysCount = 0;
      let totalDaysCount = 100;
      let currentWeekNumber = currentSemesterWeek();

      SEMESTER_481_WEEKS.forEach(week => {
        const row = document.createElement('div');
        const isExam = week.type === 'exam';
        const isHoliday = week.type === 'holiday' && week.weekNum === 14;

        let rowBg = 'hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors';
        if (isExam) rowBg = 'bg-amber-50/30 dark:bg-amber-950/15';
        else if (isHoliday) rowBg = 'bg-emerald-50/30 dark:bg-emerald-950/15';

        row.className = `grid grid-cols-6 items-stretch border-b border-slate-100 dark:border-slate-800/80 ${rowBg}`;
        row.id = `semester-week-${week.weekNum}`;

        const weekCol = document.createElement('div');
        weekCol.className = 'p-2 border-l border-slate-200 dark:border-slate-800 flex flex-col justify-center items-center text-center bg-slate-50/40 dark:bg-slate-900/40';
        weekCol.innerHTML = `<span class="font-bold text-sm text-slate-800 dark:text-slate-200">${week.title}</span>`;
        row.appendChild(weekCol);

        week.days.forEach((day, dIdx) => {
          const dayCol = document.createElement('div');
          const isPassed = day.greg < todayStr;
          const isToday = day.greg === todayStr;

          if (isPassed) passedDaysCount++;
          if (isToday) currentWeekNumber = week.weekNum;

          let borderClass = dIdx < 4 ? 'border-l border-slate-200/80 dark:border-slate-800/80' : '';
          let cellStyle = '';
          let badge = '';

          if (isPassed) {
            cellStyle = 'day-stroked bg-slate-100/50 dark:bg-slate-800/30 text-slate-500';
          } else if (isToday) {
            cellStyle = 'ring-2 ring-brand-500 bg-brand-50 dark:bg-brand-950/70 text-brand-900 dark:text-white font-bold shadow-sm';
            badge = '<span class="text-[12px] px-1 rounded bg-brand-600 text-white font-bold">اليوم</span>';
          } else if (day.isHoliday) {
            cellStyle = 'bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300';
            badge = '<span class="text-[12px] px-1 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 font-bold">إجازة</span>';
          } else if (day.isExam) {
            cellStyle = 'bg-amber-50/60 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300';
            badge = '<span class="text-[12px] px-1 rounded bg-amber-100 text-amber-800 font-bold">اختبار</span>';
          }

          dayCol.className = `p-2 relative flex flex-col justify-between min-h-[64px] ${borderClass} ${cellStyle}`;
          dayCol.innerHTML = `
            <div class="flex items-center justify-between mb-1">
              <span class="text-[12px] font-mono num-en">${toLatinDigits(day.greg)}</span>
              ${badge}
            </div>
            <div>
              <p class="text-[12px] font-bold num-en">${toLatinDigits(day.hijri)} AH</p>
              ${day.holidayNote ? `<p class="text-[12px] text-emerald-600 dark:text-emerald-400 truncate mt-0.5 font-bold">${day.holidayNote}</p>` : ''}
            </div>
          `;
          row.appendChild(dayCol);
        });

        container.appendChild(row);
      });

      const weekBadgeEl = document.getElementById('currentSemesterWeekBadge');
      const daysPassedBadgeEl = document.getElementById('semesterDaysPassedBadge');
      const progressPercentEl = document.getElementById('semesterProgressPercent');
      const progressBarEl = document.getElementById('semesterProgressBar');

      const percent = Math.min(100, Math.round((passedDaysCount / totalDaysCount) * 100));
      if (weekBadgeEl) weekBadgeEl.textContent = `Week ${currentWeekNumber}`;
      if (daysPassedBadgeEl) daysPassedBadgeEl.textContent = `${passedDaysCount} / ${totalDaysCount} Days`;
      if (progressPercentEl) progressPercentEl.textContent = `${percent}%`;
      if (progressBarEl) progressBarEl.style.width = `${percent}%`;
    }

    function scrollToCurrentWeek() {
      const now = new Date();
      const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      let targetWeek = currentSemesterWeek();
      for (const w of SEMESTER_481_WEEKS) {
        if (w.days.some(d => d.greg === todayStr)) {
          targetWeek = w.weekNum;
          break;
        }
      }
      const el = document.getElementById(`semester-week-${targetWeek}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('bg-brand-100/50', 'dark:bg-brand-900/50');
        setTimeout(() => el.classList.remove('bg-brand-100/50', 'dark:bg-brand-900/50'), 1500);
      }
    }

    // Attendance & Absence Tracking Feature
    function renderAttendance() {
      const grid = document.getElementById('attendanceGrid');
      if (!grid) return;
      grid.innerHTML = '';

      Object.keys(attendance).forEach(code => {
        const item = attendance[code];
        const isNearDN = item.absences >= item.maxAllowed - 1;
        const isDN = item.absences >= item.maxAllowed;

        let statusColor = 'border-slate-200 dark:border-slate-800';
        let badgeBg = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

        if (isDN) {
          statusColor = 'border-rose-500 ring-2 ring-rose-500/30';
          badgeBg = 'bg-rose-100 text-rose-700 font-bold';
        } else if (isNearDN) {
          statusColor = 'border-amber-500 ring-1 ring-amber-500/30';
          badgeBg = 'bg-amber-100 text-amber-800 font-bold';
        }

        const card = document.createElement('div');
        card.className = `p-5 rounded-2xl border bg-white dark:bg-[#0f172a] shadow-apple-card dark:shadow-apple-card-dark flex flex-col justify-between ${statusColor}`;
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="font-black font-mono text-base">${escapeHTML(code)}</span>
              <span class="text-[12px] px-2 py-0.5 rounded-full ${badgeBg}">
                ${isDN ? 'حرمان (DN)' : isNearDN ? 'إنذار غياب' : 'وضع آمن'}
              </span>
            </div>
            <h3 class="font-bold text-sm text-slate-800 dark:text-slate-200 mb-3">${escapeHTML(item.name)}</h3>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500 mb-2">
              <span>مرات الغياب: <strong class="num-en">${item.absences}</strong></span>
              <span>الحد المسموح (25%): <strong class="num-en">${item.maxAllowed}</strong></span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="h-full rounded-full ${isDN ? 'bg-rose-500' : isNearDN ? 'bg-amber-500' : 'bg-brand-500'}" style="width: ${(item.absences / item.maxAllowed) * 100}%"></div>
            </div>
          </div>

          <div class="flex items-center justify-between gap-2 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <span class="text-[12px] text-slate-500">تحديث الغياب:</span>
            <div class="flex items-center gap-2">
              <button onclick="changeAbsence('${escapeHTML(code)}', -1)" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold active:scale-90 transition-transform">
                -
              </button>
              <span class="font-mono font-bold text-sm w-4 text-center">${item.absences}</span>
              <button onclick="changeAbsence('${escapeHTML(code)}', 1)" class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 text-rose-600 flex items-center justify-center font-bold active:scale-90 transition-transform">
                +
              </button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });

      initLucide();
    }

    function changeAbsence(code, delta) {
      if (!attendance[code]) return;
      attendance[code].absences = Math.max(0, attendance[code].absences + delta);
      persistAttendance();
      renderAttendance();
      showToast(`تم تحديث غيابات ${escapeHTML(code)}`, 'check');
    }

    // Task Manager logic
    function setTaskStatusFilter(filter) {
      currentTaskFilter = filter;
      document.querySelectorAll('.task-filter-btn').forEach(btn => {
        if (btn.dataset.filter === filter) {
          btn.className = 'task-filter-btn px-2.5 py-1 rounded-lg font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs';
        } else {
          btn.className = 'task-filter-btn px-2.5 py-1 rounded-lg font-medium text-slate-600 dark:text-slate-500';
        }
      });
      renderTasks();
    }

    function handleQuickAddTask(e) {
      e.preventDefault();
      const input = document.getElementById('quickTaskInput');
      const title = input.value.trim();
      if (!title) return;

      const newTask = {
        id: 'task-' + Date.now(),
        title,
        category: 'Academic',
        priority: 'Medium',
        completed: false
      };

      tasks.unshift(newTask);
      persistTasks();
      input.value = '';
      renderTasks();
      renderMomentumProgress();
      showToast('تمت إضافة المهمة', 'check');
    }

    function toggleTaskCompletion(id) {
      const task = tasks.find(t => t.id === id);
      if (!task) return;
      task.completed = !task.completed;
      persistTasks();
      renderTasks();
      renderMomentumProgress();
      if (task.completed) {
        showToast('أحسنت! تم إنجاز المهمة', 'check-circle');
      }
    }

    function renderTasks() {
      const container = document.getElementById('taskListContainer');
      if (!container) return;
      container.innerHTML = '';

      let filtered = [...tasks];
      if (currentTaskFilter === 'pending') filtered = filtered.filter(t => !t.completed);
      else if (currentTaskFilter === 'completed') filtered = filtered.filter(t => t.completed);

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="py-8 text-center text-slate-500 text-sm">
            <i data-lucide="inbox" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
            <p>لا توجد مهام مطابقة</p>
          </div>
        `;
        initLucide();
        return;
      }

      filtered.forEach((task) => {
        const item = document.createElement('div');
        item.className = `flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 ${task.completed ? 'opacity-50' : ''}`;
        
        let prioBadge = '<span class="text-[12px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-500">عادي</span>';
        if (task.priority === 'Urgent') prioBadge = '<span class="text-[12px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-600 border border-rose-200">عاجل</span>';
        else if (task.priority === 'High') prioBadge = '<span class="text-[12px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-600 border border-amber-200">مهم</span>';

        item.innerHTML = `
          <div class="flex items-center gap-3 flex-1 min-w-0">
            <button onclick="toggleTaskCompletion('${task.id}')" class="w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'}">
              ${task.completed ? '<i data-lucide="check" class="w-3.5 h-3.5 stroke-[3]"></i>' : ''}
            </button>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-slate-800 dark:text-slate-200 truncate ${task.completed ? 'line-through text-slate-500' : ''}">${escapeHTML(task.title)}</p>
              <div class="flex items-center gap-2 mt-0.5">
                ${prioBadge}
                <span class="text-[12px] text-slate-500">${task.category === 'Project' ? 'مشروع تخرج' : task.category === 'Personal' ? 'شخصي' : 'أكاديمي'}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <button onclick="deleteTaskDirect('${task.id}')" class="p-1 rounded-lg text-slate-500 hover:text-rose-500 transition-colors">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `;
        container.appendChild(item);
      });

      initLucide();
    }

    function deleteTaskDirect(id) {
      tasks = tasks.filter(t => t.id !== id);
      persistTasks();
      renderTasks();
      renderMomentumProgress();
      showToast('تم حذف المهمة', 'trash');
    }

    function renderMomentumProgress() {
      const total = tasks.length;
      const completed = tasks.filter(t => t.completed).length;
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
      const pending = total - completed;

      const badge = document.getElementById('completionPercentBadge');
      const fraction = document.getElementById('progressFractionDisplay');
      const counter = document.getElementById('pendingTasksCounter');
      const linear = document.getElementById('linearProgressBar');
      const circlePath = document.getElementById('progressCirclePath');

      if (badge) badge.textContent = `${percent}%`;
      if (fraction) fraction.textContent = `${completed}/${total}`;
      if (counter) counter.textContent = `${pending} متبقي`;
      if (linear) linear.style.width = `${percent}%`;
      if (circlePath) circlePath.setAttribute('stroke-dasharray', `${percent}, 100`);
    }

    // Daily Vertical Timeline
    function selectTimelineDay(day) {
      activeTimelineDay = day;
      document.querySelectorAll('.timeline-day-btn').forEach(btn => {
        if (btn.dataset.day === day) {
          btn.className = 'timeline-day-btn px-2.5 py-1 rounded-lg font-bold bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 shadow-xs';
        } else {
          btn.className = 'timeline-day-btn px-2.5 py-1 rounded-lg font-medium text-slate-600 dark:text-slate-500';
        }
      });
      renderTimeline();
    }

    function renderTimeline() {
      const heading = document.getElementById('timelineActiveDayHeading');
      const statsBadge = document.getElementById('timelineStatsBadge');
      const container = document.getElementById('verticalTimelineContainer');
      if (!container) return;

      if (heading) heading.textContent = `جدول ومخطط يوم ${getDayArabic(activeTimelineDay)}`;
      const dayLectures = lectures.filter(l => l.day === activeTimelineDay)
        .sort((a, b) => a.startTime.localeCompare(b.startTime));

      if (statsBadge) statsBadge.textContent = `${dayLectures.length} محاضرات`;

      container.innerHTML = '';
      if (dayLectures.length === 0) {
        container.innerHTML = `
          <div class="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 text-emerald-800 dark:text-emerald-300">
            <h3 class="font-bold text-sm">يوم دراسة ذاتية ومشاريع</h3>
            <p class="text-[12px] mt-1">لا توجد محاضرات في هذا اليوم. وقت مثالي للتركيز على معمل الأنظمة ومشروع التخرج.</p>
          </div>
        `;
        return;
      }

      dayLectures.forEach(lec => {
        const node = document.createElement('div');
        node.className = 'relative pr-6';
        node.innerHTML = `
          <span class="absolute right-[-21px] top-3.5 w-3.5 h-3.5 rounded-full bg-brand-500 ring-4 ring-white dark:ring-slate-900"></span>
          <div class="p-4 rounded-2xl border ${getColorClasses(lec.color)} shadow-xs">
            <div class="flex items-center justify-between mb-1">
              <span class="font-black font-mono text-sm">${escapeHTML(lec.courseCode)}</span>
              <span class="font-mono text-sm font-bold">${lec.startTime} - ${lec.endTime}</span>
            </div>
            <h3 class="font-bold text-sm mb-1">${escapeHTML(lec.courseName)}</h3>
            <p class="text-sm opacity-75">${escapeHTML(lec.room || 'كلية الحاسب')}</p>
          </div>
        `;
        container.appendChild(node);
      });

      initLucide();
    }

    // View Switching Logic
    function switchView(viewName) {
      activeView = viewName;

      // Update Desktop Nav Tabs
      document.querySelectorAll('.view-tab-btn').forEach(btn => {
        if (btn.id === `tab-btn-${viewName}`) {
          btn.className = 'view-tab-btn flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-sm font-bold transition-all bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm';
        } else {
          btn.className = 'view-tab-btn flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all text-slate-600 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white';
        }
      });

      // Update Mobile Bottom Nav
      document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        if (btn.id === `m-nav-${viewName}`) {
          btn.className = 'mobile-nav-btn flex flex-col items-center gap-1 p-1.5 rounded-xl text-brand-600 dark:text-brand-400 active:scale-90 transition-transform font-bold';
        } else {
          btn.className = 'mobile-nav-btn flex flex-col items-center gap-1 p-1.5 rounded-xl text-slate-500 active:scale-90 transition-transform';
        }
      });

      document.querySelectorAll('.view-panel').forEach(panel => panel.classList.add('hidden'));
      const targetPanel = document.getElementById(`view-${viewName}`);
      if (targetPanel) targetPanel.classList.remove('hidden');

      if (viewName === 'timetable') renderTimetableLectures();
      if (viewName === 'semester') renderSemesterCalendar();
      if (viewName === 'timeline') renderTimeline();
      if (viewName === 'tasks') renderTasks();
      if (viewName === 'attendance') renderAttendance();

      initLucide();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderAll() {
      updateUpNextCard(new Date());
      renderTimetableLectures();
      renderSemesterCalendar();
      renderTimeline();
      renderTasks();
      renderMomentumProgress();
      renderAttendance();
      initLucide();
    }

    // Modals
    function openAddLectureModal(defaults = {}) {
      document.getElementById('lectureModalTitle').textContent = 'إضافة محاضرة جديدة';
      document.getElementById('lectureEditId').value = '';
      document.getElementById('deleteLectureBtn').classList.add('hidden');
      document.getElementById('lectureCourseCode').value = defaults.courseCode || '';
      document.getElementById('lectureCourseName').value = defaults.courseName || '';
      document.getElementById('lectureRoom').value = defaults.room || 'كلية الحاسب';
      document.getElementById('lectureDay').value = defaults.day || 'Sunday';
      document.getElementById('lectureStartTime').value = defaults.startTime || '08:00';
      document.getElementById('lectureEndTime').value = defaults.startTime ? minutesToTime(Math.min(1439, timeToMinutes(defaults.startTime) + 75)) : '09:15';
      document.querySelector('input[name="lectureColor"][value="cyan"]').checked = true;
      document.getElementById('lectureModal').classList.remove('hidden');
    }

    function openEditLectureModal(id) {
      const lec = lectures.find(l => l.id === id);
      if (!lec) return;
      document.getElementById('lectureModalTitle').textContent = 'تعديل المحاضرة';
      document.getElementById('lectureEditId').value = lec.id;
      document.getElementById('deleteLectureBtn').classList.remove('hidden');
      document.getElementById('lectureCourseCode').value = lec.courseCode;
      document.getElementById('lectureCourseName').value = lec.courseName;
      document.getElementById('lectureRoom').value = lec.room || '';
      document.getElementById('lectureDay').value = lec.day;
      document.getElementById('lectureStartTime').value = lec.startTime;
      document.getElementById('lectureEndTime').value = lec.endTime;
      document.querySelectorAll('input[name="lectureColor"]').forEach(r => r.checked = r.value === (lec.color || 'cyan'));
      document.getElementById('lectureModal').classList.remove('hidden');
    }

    function closeLectureModal() {
      document.getElementById('lectureModal').classList.add('hidden');
    }

    function saveLecture(e) {
      e.preventDefault();
      const editId = document.getElementById('lectureEditId').value;
      const courseCode = document.getElementById('lectureCourseCode').value.trim();
      const courseName = document.getElementById('lectureCourseName').value.trim();
      const room = document.getElementById('lectureRoom').value.trim();
      const day = document.getElementById('lectureDay').value;
      const startTime = document.getElementById('lectureStartTime').value;
      const endTime = document.getElementById('lectureEndTime').value;
      const color = document.querySelector('input[name="lectureColor"]:checked')?.value || 'cyan';

      if (!courseCode || !courseName || endTime <= startTime) {
        showToast('أدخل اسم المقرر ورمزه، واجعل وقت الانتهاء بعد البدء.');
        return;
      }
      if (editId) {
        const idx = lectures.findIndex(l => l.id === editId);
        if (idx !== -1) {
          lectures[idx] = { ...lectures[idx], courseCode, courseName, room, day, startTime, endTime, color };
        }
      } else {
        lectures.push({ id: 'lec-' + Date.now(), courseCode, courseName, room, day, startTime, endTime, color });
      }

      persistLectures();
      closeLectureModal();
      renderAll();
      showToast('تم حفظ المحاضرة', 'check');
    }

    function deleteCurrentLecture() {
      const editId = document.getElementById('lectureEditId').value;
      if (!editId) return;
      if (confirm('حذف هذه المحاضرة من الجدول؟')) {
        lectures = lectures.filter(l => l.id !== editId);
        persistLectures();
        closeLectureModal();
        renderAll();
        showToast('تم حذف المحاضرة', 'trash');
      }
    }

    function openAddTaskModal() {
      document.getElementById('taskModalTitle').textContent = 'إضافة مهمة جديدة';
      document.getElementById('taskEditId').value = '';
      document.getElementById('deleteTaskBtn').classList.add('hidden');
      document.getElementById('taskTitle').value = '';
      document.getElementById('taskModal').classList.remove('hidden');
    }

    function closeTaskModal() {
      document.getElementById('taskModal').classList.add('hidden');
    }

    function saveTask(e) {
      e.preventDefault();
      const title = document.getElementById('taskTitle').value.trim();
      const priority = document.getElementById('taskPriority').value;
      const category = document.getElementById('taskCategory').value;
      if (!title) return;

      tasks.unshift({
        id: 'task-' + Date.now(),
        title,
        priority,
        category,
        completed: false
      });

      persistTasks();
      closeTaskModal();
      renderTasks();
      renderMomentumProgress();
      showToast('تمت إضافة المهمة', 'check');
    }

    // Pomodoro Timer
    function togglePomodoroDrawer(forceOpen = false) {
      const drawer = document.getElementById('pomodoroDrawer');
      if (!drawer) return;
      const isClosed = drawer.classList.contains('pointer-events-none') || drawer.classList.contains('translate-y-full');
      if (forceOpen || isClosed) {
        drawer.classList.remove('pointer-events-none', 'translate-y-full', 'opacity-0');
        drawer.classList.add('pointer-events-auto', 'translate-y-0', 'opacity-100');
      } else {
        drawer.classList.remove('pointer-events-auto', 'translate-y-0', 'opacity-100');
        drawer.classList.add('pointer-events-none', 'translate-y-full', 'opacity-0');
      }
    }

    function setPomodoroMode(mode) {
      pomodoroState.mode = mode;
      clearInterval(pomodoroState.intervalId);
      pomodoroState.isRunning = false;
      if (mode === 'work') pomodoroState.duration = 25 * 60;
      else if (mode === 'shortBreak') pomodoroState.duration = 5 * 60;
      else pomodoroState.duration = 15 * 60;
      pomodoroState.timeLeft = pomodoroState.duration;
      document.getElementById('pomodoroModeLabel').textContent = mode === 'work' ? 'تركيز (25 دقيقة)' : mode === 'shortBreak' ? 'استراحة قصيرة (5 دقائق)' : 'استراحة طويلة (15 دقيقة)';
      [['pomoWorkBtn','work'],['pomoShortBtn','shortBreak'],['pomoLongBtn','longBreak']].forEach(([id,value]) => {
        const btn = document.getElementById(id);
        btn.setAttribute('aria-pressed', String(value === mode));
        btn.classList.toggle('bg-white', value === mode);
      });
      updatePomodoroDisplay();
      updatePomodoroPlayButtonState();
    }

    function togglePomodoroPlay() {
      if (pomodoroState.isRunning) {
        clearInterval(pomodoroState.intervalId);
        pomodoroState.isRunning = false;
      } else {
        pomodoroState.isRunning = true;
        pomodoroState.intervalId = setInterval(tickPomodoro, 1000);
      }
      updatePomodoroPlayButtonState();
    }

    function tickPomodoro() {
      if (pomodoroState.timeLeft > 0) {
        pomodoroState.timeLeft--;
        updatePomodoroDisplay();
      } else {
        clearInterval(pomodoroState.intervalId);
        pomodoroState.isRunning = false;
        if (pomodoroState.mode === 'work') {
          pomodoroState.sessionsCompleted++;
          document.getElementById('sessionStreakLabel').textContent = `${pomodoroState.sessionsCompleted} جلسة`;
          showToast('انتهت جلسة التركيز! استرح قليلاً', 'sparkles');
          setPomodoroMode('shortBreak');
        } else { showToast('انتهت الاستراحة، حان وقت التركيز'); setPomodoroMode('work'); }
      }
    }

    function resetPomodoro() {
      clearInterval(pomodoroState.intervalId);
      pomodoroState.isRunning = false;
      pomodoroState.timeLeft = pomodoroState.duration;
      updatePomodoroDisplay();
      updatePomodoroPlayButtonState();
    }

    function skipPomodoro() {
      clearInterval(pomodoroState.intervalId);
      pomodoroState.isRunning = false;
      setPomodoroMode(pomodoroState.mode === 'work' ? 'shortBreak' : 'work');
    }

    function updatePomodoroDisplay() {
      const m = Math.floor(pomodoroState.timeLeft / 60);
      const s = pomodoroState.timeLeft % 60;
      const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      const disp = document.getElementById('pomodoroTimerDisplay');
      if (disp) disp.textContent = formatted;

      const circle = document.getElementById('pomodoroRingCircle');
      if (circle) {
        const circumference = 264;
        circle.style.strokeDashoffset = circumference - ((pomodoroState.timeLeft / pomodoroState.duration) * circumference);
      }
    }

    function updatePomodoroPlayButtonState() {
      const text = document.getElementById('pomodoroPlayText');
      const btn = document.getElementById('pomodoroPlayBtn');
      if (!text || !btn) return;
      if (pomodoroState.isRunning) {
        text.textContent = 'إيقاف مؤقت';
        btn.className = 'px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md active:scale-95 flex items-center gap-2 transition-all';
      } else {
        text.textContent = 'بدء التركيز';
        btn.className = 'px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm shadow-md active:scale-95 flex items-center gap-2 transition-all';
      }
    }

    // Firebase Sync Engine (With loop protection)
    function initFirebaseSync() {
      const savedConfig = localStorage.getItem(CLOUD_STORAGE_KEYS.FIREBASE_CONFIG);
      if (!savedConfig) {
        updateCloudStatusUI(false);
        return;
      }
      try {
        connectToFirebase(JSON.parse(savedConfig));
      } catch (e) {
        updateCloudStatusUI(false);
      }
    }

    function connectToFirebase(config) {
      try {
        if (!window.firebase) { updateCloudStatusUI(false, 'تعذر تحميل خدمة المزامنة؛ تحقق من الاتصال.'); return; }
        if (!firebase.apps.length) firebase.initializeApp(config);

        firebaseDb = firebase.firestore();
        isCloudConnected = true;
        updateCloudStatusUI(true);

        if (cloudUnsubscribe) cloudUnsubscribe();

        cloudUnsubscribe = firebaseDb.collection('workspaces').doc('mazen_main')
          .onSnapshot({ includeMetadataChanges: true }, (doc) => {
            if (doc.metadata && doc.metadata.hasPendingWrites) return;

            if (doc.exists) {
              const cloudData = doc.data();
              if (!cloudData) return;

              // If encryptedVault is used and active PIN is present, decrypt it
              if (cloudData.encryptedVault && activeSessionPin) {
                decryptObject(cloudData.encryptedVault, activeSessionPin).then(decryptedData => {
                  let hasRealChanges = false;
                  if (decryptedData.lectures && JSON.stringify(decryptedData.lectures) !== JSON.stringify(lectures)) {
                    lectures = decryptedData.lectures;
                    hasRealChanges = true;
                  }
                  if (decryptedData.tasks && JSON.stringify(decryptedData.tasks) !== JSON.stringify(tasks)) {
                    tasks = decryptedData.tasks;
                    hasRealChanges = true;
                  }
                  if (decryptedData.attendance && JSON.stringify(decryptedData.attendance) !== JSON.stringify(attendance)) {
                    attendance = decryptedData.attendance;
                    hasRealChanges = true;
                  }
                  if (hasRealChanges) {
                    isIncomingCloudUpdate = true;
                    renderAll();
                    setTimeout(() => { isIncomingCloudUpdate = false; }, 200);
                    showToast('تمت المزامنة وفك التشفير السحابي بنجاح', 'shield-check');
                  }
                }).catch(e => console.error('Cloud decryption error', e));
              }
            } else {
              debouncedPushToCloud(0);
            }
          }, (err) => {
            updateCloudStatusUI(false, 'خطأ في الاتصال بقاعدة البيانات');
          });

      } catch (err) {
        updateCloudStatusUI(false, err.message);
      }
    }

    function debouncedPushToCloud(delay = 500) {
      if (!firebaseDb || !isCloudConnected || isIncomingCloudUpdate) return;
      clearTimeout(cloudPushTimeout);
      cloudPushTimeout = setTimeout(() => {
        pushLocalStateToCloud();
      }, delay);
    }

    function pushLocalStateToCloud() {
      if (!firebaseDb || !isCloudConnected || isIncomingCloudUpdate) return;
      try {
        // Encrypt locally before pushing to Firestore for true End-to-End Encryption
        saveEncryptedWorkspace().then(encryptedPayload => {
          if (!encryptedPayload || !firebaseDb || !isVaultUnlocked) return;
          firebaseDb.collection('workspaces').doc('mazen_main').set({
            encryptedVault: encryptedPayload,
            lastUpdatedClient: Date.now()
          }, { merge: true }).catch(err => console.error('Push error', err));
        }).catch(() => updateCloudStatusUI(false, 'تعذر حفظ البيانات السحابية'));
      } catch (e) {
        console.error('Push exception', e);
      }
    }

    function updateCloudStatusUI(connected, errorMsg = '') {
      const dot = document.getElementById('cloudSyncStatusDot');
      const text = document.getElementById('cloudSyncStatusText');
      const ind = document.getElementById('cloudStatusIndicatorRing');
      const title = document.getElementById('cloudStatusTitle');
      const sub = document.getElementById('cloudStatusSub');
      const badge = document.getElementById('cloudStatusBadge');
      const disBtn = document.getElementById('disconnectCloudBtn');

      if (connected) {
        if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-500 live-pulse';
        if (text) text.textContent = 'سحابي متصل';
        if (ind) ind.className = 'w-3 h-3 rounded-full bg-emerald-500 live-pulse';
        if (title) title.textContent = 'متصل سحابياً (Firebase Active)';
        if (sub) sub.textContent = 'أي تعديل على الجوال أو اللابتوب يتزامن لحظياً.';
        if (badge) {
          badge.textContent = 'Online Sync';
          badge.className = 'text-[12px] font-mono px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 font-bold';
        }
        if (disBtn) disBtn.classList.remove('hidden');
      } else {
        if (dot) dot.className = 'w-2 h-2 rounded-full bg-amber-400';
        if (text) text.textContent = 'مزامنة سحابية';
        if (ind) ind.className = 'w-3 h-3 rounded-full bg-amber-500';
        if (title) title.textContent = errorMsg ? 'تعذر الاتصال' : 'غير متصل بالسحابة';
        if (sub) sub.textContent = errorMsg || 'البيانات تُحفظ حالياً على هذا الجهاز فقط.';
        if (badge) {
          badge.textContent = 'Local';
          badge.className = 'text-[12px] font-mono px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700';
        }
        if (disBtn) disBtn.classList.add('hidden');
      }
      initLucide();
    }

    function openCloudSyncModal() {
      const modal = document.getElementById('cloudSyncModal');
      const textarea = document.getElementById('firebaseConfigInput');
      const savedConfig = localStorage.getItem(CLOUD_STORAGE_KEYS.FIREBASE_CONFIG);
      if (textarea && savedConfig) textarea.value = savedConfig;
      if (modal) modal.classList.remove('hidden');
    }

    function closeCloudSyncModal() {
      const modal = document.getElementById('cloudSyncModal');
      if (modal) modal.classList.add('hidden');
    }

    function saveAndConnectFirebase() {
      const rawInput = document.getElementById('firebaseConfigInput').value.trim();
      if (!rawInput) return;

      let parsedConfig = null;
      try {
        let clean = rawInput;
        if (clean.includes('{') && clean.includes('}')) {
          clean = clean.substring(clean.indexOf('{'), clean.lastIndexOf('}') + 1);
        }
        clean = clean.replace(/([a-zA-Z0-9_]+)\s*:/g, '"$1":');
        clean = clean.replace(/,\s*}/g, '}');
        clean = clean.replace(/,\s*]/g, ']');
        parsedConfig = JSON.parse(clean);
      } catch (err) {
        const extractField = (key) => {
          const match = rawInput.match(new RegExp(key + ':[\\s"\']+\\s*([^\\s,"\']+)'));
          return match ? match[1] : '';
        };
        parsedConfig = {
          apiKey: extractField('apiKey'),
          authDomain: extractField('authDomain'),
          projectId: extractField('projectId'),
          storageBucket: extractField('storageBucket'),
          messagingSenderId: extractField('messagingSenderId'),
          appId: extractField('appId')
        };
      }

      if (!parsedConfig || !parsedConfig.apiKey) {
        alert('يرجى التأكد من نسخ كود فيربيس بشكل سليم.');
        return;
      }

      localStorage.setItem(CLOUD_STORAGE_KEYS.FIREBASE_CONFIG, JSON.stringify(parsedConfig, null, 2));
      connectToFirebase(parsedConfig);
      closeCloudSyncModal();
      showToast('تم تفعيل المزامنة السحابية!', 'cloud-lightning');
    }

    function disconnectCloudSync() {
      if (confirm('إلغاء ربط المزامنة السحابية؟')) {
        localStorage.removeItem(CLOUD_STORAGE_KEYS.FIREBASE_CONFIG);
        if (cloudUnsubscribe) cloudUnsubscribe();
        isCloudConnected = false;
        firebaseDb = null;
        updateCloudStatusUI(false);
        closeCloudSyncModal();
        showToast('تم إلغاء الربط', 'cloud-off');
      }
    }

    // Backup & Export
    function toggleBackupMenu() {
      const m = document.getElementById('backupDropdown');
      if (m) m.classList.toggle('hidden');
    }

    window.addEventListener('click', (e) => {
      const btn = document.getElementById('backupMenuBtn');
      const m = document.getElementById('backupDropdown');
      if (btn && m && !btn.contains(e.target) && !m.contains(e.target)) {
        m.classList.add('hidden');
      }
    });

    function exportDataBackup() {
      const data = { version: '3.0', lectures, tasks, attendance };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `mazen_workspace_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      toggleBackupMenu();
      showToast('تم تصدير النسخة الاحتياطية', 'download');
    }

    function importDataBackup(e) {
      const file = e.target.files[0];
      if (!file) return;
      const r = new FileReader();
      r.onload = (evt) => {
        try {
          const parsed = validateBackup(JSON.parse(evt.target.result));
          if (parsed.lectures) lectures = parsed.lectures;
          if (parsed.tasks) tasks = parsed.tasks;
          if (parsed.attendance) attendance = parsed.attendance;
          persistLectures();
          persistTasks();
          persistAttendance();
          renderAll();
          toggleBackupMenu();
          showToast('تم استيراد البيانات بنجاح', 'upload');
        } catch (err) {
          alert('ملف غير صالح');
        }
      };
      r.readAsText(file);
    }

    function confirmResetMockData() {
      if (confirm('إعادة ضبط الجدول والبيانات إلى الوضع الأولي؟')) {
        lectures = JSON.parse(JSON.stringify(INITIAL_LECTURES));
        tasks = JSON.parse(JSON.stringify(INITIAL_TASKS));
        attendance = JSON.parse(JSON.stringify(INITIAL_ATTENDANCE));
        persistLectures();
        persistTasks();
        persistAttendance();
        renderAll();
        toggleBackupMenu();
        showToast('تمت إعادة الضبط', 'refresh-cw');
      }
    }

    function showToast(msg, icon = 'info') {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      while (container.children.length >= 2) {
        container.removeChild(container.firstChild);
      }

      const toast = document.createElement('div');
      toast.className = 'pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 text-sm font-bold shadow-xl transition-all duration-300 transform translate-y-2 opacity-0';
      toast.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 text-brand-400 dark:text-brand-600"></i><span>${escapeHTML(msg)}</span>`;
      container.appendChild(toast);
      initLucide();

      requestAnimationFrame(() => toast.classList.remove('translate-y-2', 'opacity-0'));
      setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    function escapeHTML(str) {
      if (!str) return '';
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
  
function timeToMinutes(value) { const [h,m] = value.split(':').map(Number); return h * 60 + m; }
function minutesToTime(value) { return `${String(Math.floor(value/60)).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`; }
function currentSemesterWeek() {
  const start = new Date(2026, 7, 23);
  return Math.max(1, Math.min(20, Math.floor((new Date() - start) / 604800000) + 1));
}
function deleteCurrentTask() {
  const id = document.getElementById('taskEditId').value;
  if (id) { deleteTaskDirect(id); closeTaskModal(); }
}
function validateBackup(data) {
  const text = value => typeof value === 'string' && value.length <= 2000;
  const id = value => typeof value === 'string' && /^[a-zA-Z0-9_-]+$/.test(value);
  const time = value => typeof value === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
  if (!data || typeof data !== 'object' || !('lectures' in data || 'tasks' in data || 'attendance' in data)) throw Error('Invalid backup');
  if (data.lectures && (!Array.isArray(data.lectures) || !data.lectures.every(l => l && id(l.id) && text(l.courseCode) && text(l.courseName) && (!l.room || text(l.room)) && ACADEMIC_DAYS.includes(l.day) && time(l.startTime) && time(l.endTime) && l.endTime > l.startTime))) throw Error('Invalid lectures');
  if (data.tasks && (!Array.isArray(data.tasks) || !data.tasks.every(t => t && id(t.id) && text(t.title) && typeof t.completed === 'boolean'))) throw Error('Invalid tasks');
  if (data.attendance && (Array.isArray(data.attendance) || typeof data.attendance !== 'object' || !Object.entries(data.attendance).every(([code,a]) => /^[a-zA-Z0-9 _-]+$/.test(code) && a && text(a.name) && Number.isInteger(a.absences) && a.absences >= 0 && Number.isInteger(a.maxAllowed) && a.maxAllowed > 0))) throw Error('Invalid attendance');
  return data;
}
