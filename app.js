// Deema (دِيمَة) Quiz Application Logic - English Premium Edition

// Sound Synthesizer via Web Audio API (No external sound assets needed)
const AudioSynth = {
  ctx: null,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  playTone(freq, type, duration, gainStart) {
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gainNode.gain.setValueAtTime(gainStart, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      
      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.log("Audio play failed:", e);
    }
  },

  click() {
    this.playTone(600, 'sine', 0.08, 0.1);
  },

  correct() {
    this.playTone(523.25, 'sine', 0.15, 0.1); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.15, 0.1), 80); // E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.25, 0.15), 160); // G5
  },

  incorrect() {
    this.playTone(180, 'triangle', 0.3, 0.2);
    setTimeout(() => this.playTone(170, 'triangle', 0.3, 0.2), 50);
  },

  celebrate() {
    this.init();
    const chord = [261.63, 329.63, 392.00, 523.25, 659.25];
    chord.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.6, 0.1), idx * 100);
    });
  }
};

// Study Notes Database
const studyNotes = {
  clinical: {
    title: "Clinical Attachments & Professional Conduct",
    content: `
      <h4>1. Core Professionalism Standards</h4>
      <p>Professionalism involves active, continuous commitments regarding confidentiality, quality of care, and patient welfare.</p>
      <ul>
        <li><strong>Conduct:</strong> Interact with patients, relatives, and staff in a considerate and professional manner. Maintain punctuality and wear name badges.</li>
        <li><strong>Appearance:</strong> Adhere to professional standards of appearance. A manifest lack of self-care is unacceptable.</li>
      </ul>
      <h4>2. Consent Principles</h4>
      <p>Always obtain consent before taking histories, examining, or doing procedures.</p>
      <blockquote>"For conducting an intimate examination under anesthesia or sedation, written consent is required, but it does NOT replace a properly conducted verbal discussion with the patient."</blockquote>
      <ul>
        <li>The right to withhold or withdraw consent must be made explicit to the patient.</li>
        <li>Intimate examinations include: vagina, breasts, rectum, or male genitalia. A professional chaperone must be present for the protection of both patients and students.</li>
      </ul>
      <h4>3. Patient Care & Safety</h4>
      <ul>
        <li><strong>Evidence-Based:</strong> Provide treatments based on the best available evidence.</li>
        <li><strong>Open Disclosure:</strong> If a patient suffers harm, remediate the harm, apologize sincerely, and explain the events and effects fully and promptly.</li>
        <li><strong>Safe Handovers:</strong> Ensure a named clinician or team has explicitly accepted responsibility for the patient.</li>
        <li><strong>Conscientious Objection:</strong> Inform the patient of their right to see another doctor and arrange for a qualified colleague to take over, without expressing disapproval of the patient's lifestyle.</li>
      </ul>
    `
  },
  cpr: {
    title: "Cardiopulmonary Resuscitation (CPR)",
    content: `
      <h4>1. Cardiac Arrest Basics</h4>
      <p>Cardiac arrest represents a state of abnormal breathing (or agonal gasps) with no pulse in major arteries. The victim will be unresponsive.</p>
      <h4>2. Basic Life Support (BLS) Protocol</h4>
      <ol>
        <li><strong>Assess Scene Safety:</strong> Ensure the environment is safe before entering to help.</li>
        <li><strong>Check Responsiveness:</strong> Tap the shoulder and shout.</li>
        <li><strong>Activate Emergency Response:</strong> Shout for help, call emergency services, and locate an AED.</li>
        <li><strong>Check Breathing & Pulse:</strong> Check for normal breathing and check the pulse (carotid/femoral in children, brachial in infants) for no more than 10 seconds.</li>
        <li><strong>Chest Compressions:</strong> Deliver high-quality chest compressions:
          <ul>
            <li><strong>Rate:</strong> 100 to 120 compressions per minute.</li>
            <li><strong>Depth:</strong> At least 2 inches (5 cm) in adults.</li>
            <li><strong>Ratio:</strong> 30 compressions then 2 breaths.</li>
          </ul>
        </li>
      </ol>
      <h4>3. Pediatric Considerations</h4>
      <ul>
        <li>In children, cardiac arrest is usually respiratory in origin. Therefore, **rescue breaths** are critical.</li>
        <li>Perform compressions in children using 2 fingers (infants) or 1/2 hands (older kids).</li>
      </ul>
      <h4>4. Automated External Defibrillator (AED)</h4>
      <p>Sequence: <strong>Power on</strong> &rarr; <strong>Attach pads</strong> &rarr; <strong>Analyze rhythm</strong> (stay clear) &rarr; <strong>Deliver shock</strong> if advised.</p>
    `
  },
  obesity: {
    title: "Obesity & Metabolic Management",
    content: `
      <h4>1. Classification (BMI)</h4>
      <p>Body Mass Index (BMI) is calculated as: <strong>Weight (kg) / [Height (m)]²</strong>.</p>
      <table>
        <tr><th>Classification</th><th>BMI Range (Adults)</th></tr>
        <tr><td>Underweight</td><td>&lt; 18.5</td></tr>
        <tr><td>Normal</td><td>18.5 – 24.9</td></tr>
        <tr><td>Overweight</td><td>25.0 – 29.9</td></tr>
        <tr><td>Obese</td><td>30.0 – 34.9</td></tr>
        <tr><td>Extremely Obese</td><td>&ge; 35.0</td></tr>
      </table>
      <p><em>Pediatrics:</em> Overweight is 85th to &lt;95th percentile. Obesity is &ge; 95th percentile.</p>
      <h4>2. Etiology & Physiology</h4>
      <ul>
        <li><strong>Primary causes:</strong> High energy-dense food intake and sedentary lifestyles.</li>
        <li><strong>Secondary causes:</strong> Hypothyroidism (slows metabolism). Note: Renal, liver, or heart failure do *not* cause obesity.</li>
        <li><strong>Leptin Resistance:</strong> High concentrations of leptin without appetite reduction.</li>
        <li><strong>Thermic Effect of Food (TEF):</strong> Protein has the highest TEF (20-35%), while fat has the lowest (2-3%).</li>
      </ul>
      <h4>3. Bariatric Surgery</h4>
      <ul>
        <li><strong>Indications:</strong> BMI &gt; 50 kg/m² (or &gt; 40 with severe complications like obstructive sleep apnea) after lifestyle failure.</li>
        <li><strong>Contraindications:</strong> Uncontrolled psychiatric illness, unresolved eating disorders.</li>
        <li><strong>Common side effects:</strong> Pulmonary embolism.</li>
      </ul>
    `
  },
  rf: {
    title: "Rheumatic Fever (RF)",
    content: `
      <h4>1. Pathophysiology</h4>
      <p>Acute Rheumatic Fever (ARF) is a post-infectious autoimmune complication following pharyngitis caused by <strong>Group A Streptococcus</strong> (GABHS). It occurs <strong>2 to 4 weeks</strong> after the throat infection.</p>
      <h4>2. Diagnosis (Modified Jones Criteria)</h4>
      <p>Diagnosis requires evidence of preceding GAS infection (ASO titer &gt; 200) plus <strong>2 Major</strong> or <strong>1 Major + 2 Minor</strong> criteria.</p>
      <ul>
        <li><strong>Major Criteria (JONES):</strong>
          <ul>
            <li><strong>J</strong>oints: Fleeting migratory polyarthritis (4+ joints, lasting days to a week).</li>
            <li><strong>O</strong>: Carditis (Pancarditis affecting myocardium, valves, and pericardium).</li>
            <li><strong>N</strong>odules: Subcutaneous nodules.</li>
            <li><strong>E</strong>rythema marginatum: Serpiginous skin rash.</li>
            <li><strong>S</strong>ydenham's Chorea: Involuntary dancing movements.</li>
          </ul>
        </li>
        <li><strong>Minor Criteria:</strong> Fever, arthralgia, high ESR/CRP, and prolonged PR interval on ECG.</li>
      </ul>
      <h4>3. Complications</h4>
      <p>Mitral and aortic valves are most commonly affected, leading to valve regurgitation, stenosis, and heart failure.</p>
    `
  },
  htn: {
    title: "Hypertension (HTN)",
    content: `
      <h4>1. Definition</h4>
      <p>Hypertension is defined as persistent blood pressure readings of <strong>&ge; 140/90 mmHg</strong>.</p>
      <h4>2. Classification</h4>
      <ul>
        <li><strong>Primary (Essential):</strong> Accounts for 90-95% of cases. Etiology is unknown but linked to genetics, salt, and obesity.</li>
        <li><strong>Secondary:</strong> Accounts for 5-10% of cases. Most common cause in adults is <strong>renal and reno-vascular diseases</strong>.</li>
      </ul>
      <h4>3. Clinical Picture & Complications</h4>
      <ul>
        <li><strong>Presentation:</strong> 90% of patients are <strong>asymptomatic</strong> ("The Silent Killer"). Symptoms like morning headache or vision blurring are non-specific.</li>
        <li><strong>Target Organ Damage:</strong> Affects the Heart (failure, infarction), Kidneys (renal failure), Eyes (retinopathy), and Brain (stroke). It does *not* affect joints.</li>
        <li><strong>Pediatric HTN:</strong> Secondary HTN is most common in children, driven by renal structural/inflammatory diseases.</li>
      </ul>
    `
  },
  hydrocephalus: {
    title: "Pediatric Hydrocephalus",
    content: `
      <h4>1. Production & Flow of CSF</h4>
      <ul>
        <li><strong>Secreted by:</strong> Choroid plexus, primarily in the lateral ventricles.</li>
        <li><strong>Flow route:</strong> Lateral ventricles &rarr; Foramen of Monro &rarr; 3rd Ventricle &rarr; Aqueduct of Sylvius &rarr; 4th Ventricle &rarr; Foramina of Luschka/Magendie &rarr; Subarachnoid space.</li>
        <li><strong>Absorbed by:</strong> Arachnoid villi into the dural venous sinuses.</li>
      </ul>
      <h4>2. Clinical Picture</h4>
      <ul>
        <li><strong>Infancy (Open Sutures):</strong> Rapid head enlargement (macrocephaly), widely separated sutures, bulging fontanelle, sunset eyes (downward gaze), Macewen sign (cracked pot sound on percussion), and dilated scalp veins.</li>
        <li><strong>Older Children (Closed Sutures):</strong> Rigidity limits expansion. Presents with signs of acute high Intracranial Pressure (ICP): severe morning headache, projectile vomiting, and papilledema.</li>
        <li><strong>Cushing Response:</strong> Severe high ICP triggers bradycardia, hypertension, and irregular respirations.</li>
      </ul>
      <h4>3. Management</h4>
      <ul>
        <li><strong>Obstructive Hydrocephalus:</strong> Managed surgically with bypass shunt operations (Ventriculoperitoneal shunts).</li>
        <li><strong>Benign External Hydrocephalus:</strong> Fluid in subarachnoid space, self-limiting condition of infancy requiring no surgery.</li>
        <li><strong>Hydrocephalus Ex Vacua:</strong> Ventricular enlargement secondary to brain tissue atrophy; normal pressure, no shunt required.</li>
      </ul>
    `
  },
  angina: {
    title: "Angina & Chest Pain",
    content: `
      <h4>1. Life-Threatening Chest Pain Causes</h4>
      <p>Myocardial infarction, aortic dissection, tension intellectual status, pulmonary embolism, esophageal rupture, and unstable angina (USA).</p>
      <h4>2. Categories of Angina</h4>
      <ul>
        <li><strong>Stable Angina:</strong> Predictable chest pain provoked by exertion or mental stress, relieved by rest or sublingual nitroglycerin.</li>
        <li><strong>Unstable Angina (USA):</strong> Unpredictable chest pain occurring at rest, representing an acute clinical emergency.</li>
      </ul>
      <h4>3. Stable Angina Characteristics</h4>
      <ul>
        <li>Dull, crushing, squeezing or constricting discomfort (never stabbing or stitching).</li>
        <li>Central, diffuse, radiating to neck, jaw, shoulders, or arms.</li>
        <li>Typically lasts between 30 seconds and 30 minutes.</li>
      </ul>
    `
  }
};

// Quiz Engine State Controller
const QuizApp = {
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  selectedAnswers: [], // Keeps indices of chosen answers
  isAnswered: false,
  mode: 'practice',
  selectedCategory: 'all',
  bookmarkedIds: [],
  quizHistory: [],
  timerInterval: null,
  timeLeft: 0,
  totalQuizTime: 0,

  init() {
    this.bookmarkedIds = JSON.parse(localStorage.getItem('deema_bookmarks')) || [];
    this.quizHistory = JSON.parse(localStorage.getItem('deema_history')) || [];
    
    this.bindEvents();
    this.updateStatsDashboard();
    this.renderDomainGrid();
  },

  bindEvents() {
    document.querySelectorAll('nav a[data-view]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        AudioSynth.click();
        const viewId = link.getAttribute('data-view');
        this.switchView(viewId);
      });
    });

    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        document.getElementById('notesModal').style.display = 'none';
      });
    }

    // Theme toggle (if added back, failsafe check)
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('deema_theme', newTheme);
      });
    }

    window.addEventListener('click', (e) => {
      const modal = document.getElementById('notesModal');
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  },

  switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));
    
    const targetView = document.getElementById(viewId);
    if (targetView) targetView.classList.add('active');
    
    const activeLink = document.querySelector(`nav a[data-view="${viewId}"]`);
    if (activeLink) activeLink.parentElement.classList.add('active');

    if (viewId === 'home') {
      this.updateStatsDashboard();
      this.renderDomainGrid();
    } else if (viewId === 'study') {
      this.renderStudyHub();
    } else if (viewId === 'bookmarks') {
      this.renderBookmarksList();
    } else if (viewId === 'analytics') {
      this.renderAnalyticsDashboard();
    }
  },

  renderDomainGrid() {
    const grid = document.getElementById('domainGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const totalQCount = questionBank.length;
    const allCard = document.createElement('div');
    allCard.className = 'domain-card';
    allCard.innerHTML = `
      <div class="domain-icon"><i class="fas fa-cubes"></i></div>
      <div class="domain-name">All Combined Domains</div>
      <div class="domain-stats-brief">
        <span>${totalQCount} Questions</span>
        <span>General Pool</span>
      </div>
    `;
    allCard.onclick = () => this.promptQuizSettings('all');
    grid.appendChild(allCard);

    Object.keys(categoryNames).forEach(cat => {
      const qList = questionBank.filter(q => q.category === cat);
      if (qList.length === 0) return;

      const catCard = document.createElement('div');
      catCard.className = 'domain-card';
      catCard.innerHTML = `
        <div class="domain-icon">${this.getCategoryIcon(cat)}</div>
        <div class="domain-name">${categoryNames[cat]}</div>
        <div class="domain-stats-brief">
          <span>${qList.length} Questions</span>
          <span>Topic Specific</span>
        </div>
      `;
      catCard.onclick = () => this.promptQuizSettings(cat);
      grid.appendChild(catCard);
    });
  },

  getCategoryIcon(cat) {
    switch (cat) {
      case 'clinical': return '<i class="fas fa-user-md"></i>';
      case 'cpr': return '<i class="fas fa-heartbeat"></i>';
      case 'obesity': return '<i class="fas fa-weight"></i>';
      case 'rf': return '<i class="fas fa-viruses"></i>';
      case 'htn': return '<i class="fas fa-gauge-high"></i>';
      case 'hydrocephalus': return '<i class="fas fa-brain"></i>';
      case 'angina': return '<i class="fas fa-hand-holding-heart"></i>';
      default: return '<i class="fas fa-stethoscope"></i>';
    }
  },

  promptQuizSettings(category) {
    this.selectedCategory = category;
    const modal = document.getElementById('notesModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    modalTitle.innerHTML = category === 'all' ? 'All Combined Domains' : categoryNames[category];
    const count = category === 'all' ? questionBank.length : questionBank.filter(q => q.category === category).length;

    modalBody.innerHTML = `
      <div style="text-align:center;">
        <p style="margin-bottom:1.5rem; font-size:0.95rem; color:var(--text-muted)">
          Select mode and size to configure your test session.
        </p>
        
        <div style="display:flex; justify-content:center; gap:15px; margin-bottom:1.5rem;">
          <div id="selectPractice" class="study-card" style="border: 2px solid var(--border-white); flex:1; cursor:pointer; padding:1rem;">
            <h3 style="color:var(--emerald); font-size:1rem;"><i class="fas fa-graduation-cap"></i> Practice</h3>
            <p style="margin-top:0.2rem; font-size:0.75rem; margin-bottom:0;">Instant rationales & feedback.</p>
          </div>
          
          <div id="selectExam" class="study-card" style="border: 1px solid rgba(255,255,255,0.05); flex:1; cursor:pointer; padding:1rem;">
            <h3 style="color:var(--text-white); font-size:1rem;"><i class="fas fa-stopwatch"></i> Exam</h3>
            <p style="margin-top:0.2rem; font-size:0.75rem; margin-bottom:0;">Timer limit & final score review.</p>
          </div>
        </div>

        <div style="margin-bottom:1.5rem; max-width:300px; margin:0 auto 1.5rem;">
          <label style="display:block; margin-bottom:6px; font-weight:bold; font-size:0.85rem;">Number of Questions (Max ${count}):</label>
          <input type="number" id="quizLimit" min="5" max="${count}" value="${Math.min(20, count)}" 
                 style="width:100%; padding:8px; border-radius:4px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:#fff; text-align:center; font-size:1rem;">
        </div>

        <button id="launchQuizBtn" class="btn" style="width:180px; justify-content:center;">Start Quiz</button>
      </div>
    `;

    modal.style.display = 'flex';

    let selectedMode = 'practice';
    const practiceDiv = document.getElementById('selectPractice');
    const examDiv = document.getElementById('selectExam');

    if (practiceDiv && examDiv) {
      practiceDiv.onclick = () => {
        AudioSynth.click();
        selectedMode = 'practice';
        practiceDiv.style.borderColor = 'var(--border-white)';
        examDiv.style.borderColor = 'rgba(255,255,255,0.05)';
      };

      examDiv.onclick = () => {
        AudioSynth.click();
        selectedMode = 'exam';
        examDiv.style.borderColor = 'var(--border-white)';
        practiceDiv.style.borderColor = 'rgba(255,255,255,0.05)';
      };
    }

    const launchBtn = document.getElementById('launchQuizBtn');
    if (launchBtn) {
      launchBtn.onclick = () => {
        const limitInput = document.getElementById('quizLimit');
        const limit = limitInput ? parseInt(limitInput.value) : count;
        modal.style.display = 'none';
        this.startQuiz(category, selectedMode, limit);
      };
    }
  },

  startQuiz(category, mode, limit) {
    AudioSynth.click();
    this.mode = mode;
    
    let pool = category === 'all' ? [...questionBank] : questionBank.filter(q => q.category === category);
    pool.sort(() => 0.5 - Math.random());
    
    this.currentQuestions = pool.slice(0, limit);
    this.currentIndex = 0;
    this.score = 0;
    this.isAnswered = false;
    this.selectedAnswers = [];

    this.switchView('quiz');

    const timerContainer = document.getElementById('quizTimerContainer');
    if (this.mode === 'exam') {
      if (timerContainer) timerContainer.style.display = 'flex';
      this.timeLeft = this.currentQuestions.length * 60;
      this.totalQuizTime = this.timeLeft;
      this.updateTimerDisplay();
      
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        this.timeLeft--;
        this.updateTimerDisplay();
        if (this.timeLeft <= 0) {
          clearInterval(this.timerInterval);
          this.endQuiz();
        }
      }, 1000);
    } else {
      if (timerContainer) timerContainer.style.display = 'none';
    }

    this.renderQuestion();
  },

  updateTimerDisplay() {
    const valSpan = document.getElementById('timerVal');
    if (!valSpan) return;

    const min = Math.floor(this.timeLeft / 60);
    const sec = this.timeLeft % 60;
    valSpan.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

    const timerPill = document.querySelector('.timer-pill');
    if (timerPill) {
      if (this.timeLeft < 60) {
        timerPill.classList.add('warning');
      } else {
        timerPill.classList.remove('warning');
      }
    }
  },

  renderQuestion() {
    const q = this.currentQuestions[this.currentIndex];
    if (!q) return;
    this.isAnswered = false;
    this.selectedAnswers = [];

    const fill = document.getElementById('quizProgressFill');
    if (fill) {
      const pct = ((this.currentIndex) / this.currentQuestions.length) * 100;
      fill.style.width = `${pct}%`;
    }
    
    const progressText = document.getElementById('progressText');
    if (progressText) {
      progressText.textContent = `Question ${this.currentIndex + 1} of ${this.currentQuestions.length}`;
    }

    const categoryText = document.getElementById('questionCategory');
    if (categoryText) {
      categoryText.textContent = categoryNames[q.category];
    }
    
    let qText = q.question;
    if (q.isMultiSelect) {
      qText += " (Select all correct options)";
    }
    const qTextDiv = document.getElementById('questionText');
    if (qTextDiv) qTextDiv.textContent = qText;

    const bookmarkBtn = document.getElementById('bookmarkBtn');
    if (bookmarkBtn) {
      if (this.bookmarkedIds.includes(q.id)) {
        bookmarkBtn.classList.add('bookmarked');
      } else {
        bookmarkBtn.classList.remove('bookmarked');
      }
      bookmarkBtn.onclick = () => this.toggleBookmark(q.id);
    }

    const list = document.getElementById('optionsList');
    if (list) {
      list.innerHTML = '';

      q.options.forEach((opt, idx) => {
        const li = document.createElement('div');
        li.className = 'option-item';
        
        const badgeIcon = q.isMultiSelect 
          ? `<span class="option-badge" style="border-radius: 4px;"><i class="fas fa-square" style="font-size: 0.6rem; opacity: 0;"></i></span>`
          : `<span class="option-badge">${String.fromCharCode(65 + idx)}</span>`;

        li.innerHTML = `
          ${badgeIcon}
          <span>${opt}</span>
        `;
        li.onclick = () => this.selectOption(idx);
        list.appendChild(li);
      });
    }

    // Clean up dynamic explanation panel from previous question
    const oldExp = document.querySelector('.explanation-panel');
    if (oldExp) oldExp.remove();

    const footer = document.getElementById('quizFooter');
    if (footer) {
      footer.innerHTML = '';

      if (this.mode === 'practice') {
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn';
        submitBtn.id = 'practiceSubmitBtn';
        submitBtn.innerHTML = 'Verify Answer';
        submitBtn.disabled = true;
        submitBtn.onclick = () => this.verifyPracticeAnswer();
        footer.appendChild(submitBtn);
      } else {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn';
        nextBtn.innerHTML = this.currentIndex === this.currentQuestions.length - 1 ? 'Finish Exam' : 'Next Question';
        nextBtn.disabled = true;
        nextBtn.id = 'examNextBtn';
        nextBtn.onclick = () => this.nextQuestion();
        footer.appendChild(nextBtn);
      }
    }
  },

  selectOption(idx) {
    if (this.isAnswered) return;
    AudioSynth.click();

    const q = this.currentQuestions[this.currentIndex];
    const items = document.querySelectorAll('.option-item');

    if (q.isMultiSelect) {
      const listIndex = this.selectedAnswers.indexOf(idx);
      if (listIndex > -1) {
        this.selectedAnswers.splice(listIndex, 1);
        items[idx].classList.remove('selected');
        const icon = items[idx].querySelector('.option-badge i');
        if (icon) icon.style.opacity = '0';
      } else {
        this.selectedAnswers.push(idx);
        items[idx].classList.add('selected');
        const icon = items[idx].querySelector('.option-badge i');
        if (icon) {
          icon.style.opacity = '1';
          icon.className = 'fas fa-check-square';
        }
      }

      const activeBtn = this.mode === 'practice' ? document.getElementById('practiceSubmitBtn') : document.getElementById('examNextBtn');
      if (activeBtn) {
        activeBtn.disabled = this.selectedAnswers.length === 0;
      }
      
      if (this.mode === 'exam') {
        q.userAnswers = [...this.selectedAnswers];
      }
    } else {
      items.forEach(item => item.classList.remove('selected'));
      items[idx].classList.add('selected');
      this.selectedAnswers = [idx];

      const activeBtn = this.mode === 'practice' ? document.getElementById('practiceSubmitBtn') : document.getElementById('examNextBtn');
      if (activeBtn) {
        activeBtn.disabled = false;
      }

      if (this.mode === 'exam') {
        q.userAnswer = idx;
      }
    }
  },

  verifyPracticeAnswer() {
    if (this.isAnswered) return;
    this.isAnswered = true;
    
    const q = this.currentQuestions[this.currentIndex];
    const items = document.querySelectorAll('.option-item');
    let isCorrect = false;

    if (q.isMultiSelect) {
      const correctAnswers = q.correctAnswers || [];
      
      const hasAllCorrect = correctAnswers.every(ans => this.selectedAnswers.includes(ans));
      const hasNoExtras = this.selectedAnswers.every(ans => correctAnswers.includes(ans));
      isCorrect = hasAllCorrect && hasNoExtras;

      items.forEach((item, idx) => {
        if (correctAnswers.includes(idx)) {
          item.classList.add('correct');
        } else if (this.selectedAnswers.includes(idx)) {
          item.classList.add('incorrect');
        }
      });
    } else {
      const userAns = this.selectedAnswers[0];
      const correctAns = q.answer;
      isCorrect = (userAns === correctAns);

      if (isCorrect) {
        if (items[userAns]) items[userAns].classList.add('correct');
      } else {
        if (items[userAns]) items[userAns].classList.add('incorrect');
        if (items[correctAns]) items[correctAns].classList.add('correct');
      }
    }

    if (isCorrect) {
      AudioSynth.correct();
      this.score++;
    } else {
      AudioSynth.incorrect();
    }

    items.forEach(item => item.style.cursor = 'default');

    const explanationPanel = document.createElement('div');
    explanationPanel.className = 'explanation-panel';
    explanationPanel.innerHTML = `
      <div class="explanation-title">Clinical Rationale</div>
      <div class="explanation-text">${q.explanation}</div>
    `;
    const card = document.querySelector('.question-card');
    if (card) card.appendChild(explanationPanel);

    const footer = document.getElementById('quizFooter');
    if (footer) {
      footer.innerHTML = '';
      
      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn';
      nextBtn.innerHTML = this.currentIndex === this.currentQuestions.length - 1 ? 'View Score' : 'Next Question';
      nextBtn.onclick = () => this.nextQuestion();
      footer.appendChild(nextBtn);
    }
  },

  nextQuestion() {
    if (this.mode === 'exam') {
      const q = this.currentQuestions[this.currentIndex];
      if (q.isMultiSelect) {
        const correctAnswers = q.correctAnswers || [];
        const userAnswers = q.userAnswers || [];
        const hasAllCorrect = correctAnswers.every(ans => userAnswers.includes(ans));
        const hasNoExtras = userAnswers.every(ans => correctAnswers.includes(ans));
        if (hasAllCorrect && hasNoExtras) {
          this.score++;
        }
      } else {
        if (q.userAnswer === q.answer) {
          this.score++;
        }
      }
    }

    if (this.currentIndex < this.currentQuestions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    } else {
      this.endQuiz();
    }
  },

  endQuiz() {
    clearInterval(this.timerInterval);
    AudioSynth.celebrate();
    
    const quizStats = {
      date: new Date().toLocaleDateString(),
      category: this.selectedCategory,
      score: this.score,
      total: this.currentQuestions.length,
      mode: this.mode
    };
    
    this.quizHistory.push(quizStats);
    localStorage.setItem('deema_history', JSON.stringify(this.quizHistory));

    this.switchView('results');

    const pct = Math.round((this.score / this.currentQuestions.length) * 100);
    const scoreValCircle = document.getElementById('scoreCircleVal');
    
    if (scoreValCircle) {
      const offset = 528 - (528 * pct) / 100;
      scoreValCircle.style.strokeDashoffset = offset;
    }

    const pctSpan = document.getElementById('scorePercentage');
    if (pctSpan) pctSpan.textContent = `${pct}%`;
    
    const phrase = document.getElementById('scorePhrase');
    if (phrase) phrase.textContent = this.getScorePhrase(pct);
    
    const details = document.getElementById('scoreDetails');
    if (details) details.textContent = `Correctly answered ${this.score} out of ${this.currentQuestions.length} questions.`;

    this.renderCategoryBreakdown();
  },

  getScorePhrase(pct) {
    if (pct === 100) return "Perfect Score!";
    if (pct >= 85) return "Excellent Results!";
    if (pct >= 70) return "Very Good!";
    if (pct >= 50) return "Passed";
    return "Keep Studying";
  },

  renderCategoryBreakdown() {
    const breakdown = document.getElementById('categoryBreakdown');
    if (!breakdown) return;
    breakdown.innerHTML = '<h3>Category Results Summary</h3>';

    const categoryStats = {};
    this.currentQuestions.forEach(q => {
      if (!categoryStats[q.category]) {
        categoryStats[q.category] = { correct: 0, total: 0 };
      }
      categoryStats[q.category].total++;
      
      let isCorrect = false;
      if (this.mode === 'practice') {
        if (q.isMultiSelect) {
          const correctAnswers = q.correctAnswers || [];
          isCorrect = correctAnswers.every(ans => this.selectedAnswers.includes(ans)) && this.selectedAnswers.every(ans => correctAnswers.includes(ans));
        } else {
          isCorrect = (q.answer === this.selectedAnswers[0]);
        }
      } else {
        if (q.isMultiSelect) {
          const correctAnswers = q.correctAnswers || [];
          const userAnswers = q.userAnswers || [];
          isCorrect = correctAnswers.every(ans => userAnswers.includes(ans)) && userAnswers.every(ans => correctAnswers.includes(ans));
        } else {
          isCorrect = (q.userAnswer === q.answer);
        }
      }

      if (isCorrect) {
        categoryStats[q.category].correct++;
      }
    });

    Object.keys(categoryStats).forEach(cat => {
      const stats = categoryStats[cat];
      const catPct = Math.round((stats.correct / stats.total) * 100);
      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <span class="breakdown-name">${categoryNames[cat]}</span>
        <div style="display:flex; align-items:center;">
          <div class="breakdown-bar-shell">
            <div class="breakdown-bar-fill" style="width: ${catPct}%"></div>
          </div>
          <span class="breakdown-score">${stats.correct}/${stats.total} (${catPct}%)</span>
        </div>
      `;
      breakdown.appendChild(row);
    });
  },

  toggleBookmark(questionId) {
    AudioSynth.click();
    const idx = this.bookmarkedIds.indexOf(questionId);
    if (idx > -1) {
      this.bookmarkedIds.splice(idx, 1);
    } else {
      this.bookmarkedIds.push(questionId);
    }
    localStorage.setItem('deema_bookmarks', JSON.stringify(this.bookmarkedIds));

    const bookmarkBtn = document.getElementById('bookmarkBtn');
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle('bookmarked');
    }
  },

  renderStudyHub() {
    const container = document.getElementById('studyHubGrid');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(studyNotes).forEach(key => {
      const note = studyNotes[key];
      const card = document.createElement('div');
      card.className = 'study-card';
      card.innerHTML = `
        <h3>${note.title}</h3>
        <p>Short clinical outline covering key exam criteria, diagnostics, and management protocols.</p>
        <button class="btn btn-secondary study-btn">View Rationale Summary</button>
      `;
      card.onclick = () => this.openStudyModal(key);
      container.appendChild(card);
    });
  },

  openStudyModal(key) {
    AudioSynth.click();
    const note = studyNotes[key];
    const modal = document.getElementById('notesModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.innerHTML = note.title;
    modalBody.innerHTML = note.content;
    modal.style.display = 'flex';
  },

  renderBookmarksList() {
    const container = document.getElementById('bookmarksList');
    if (!container) return;
    container.innerHTML = '';

    const startBkBtn = document.getElementById('startBookmarksQuiz');

    if (this.bookmarkedIds.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:3rem; color:var(--text-white);">
          <i class="far fa-bookmark" style="font-size:2.5rem; margin-bottom:1rem; color:var(--border-white)"></i>
          <p>No bookmarks saved yet. You can bookmark questions during your quiz to review them later.</p>
        </div>
      `;
      if (startBkBtn) startBkBtn.style.display = 'none';
      return;
    }

    if (startBkBtn) {
      startBkBtn.style.display = 'inline-flex';
      startBkBtn.onclick = () => this.startBookmarksQuiz();
    }

    this.bookmarkedIds.forEach(id => {
      const q = questionBank.find(item => item.id === id);
      if (!q) return;

      let answerText = '';
      if (q.isMultiSelect) {
        answerText = q.correctAnswers.map(ans => q.options[ans]).join(', ');
      } else {
        answerText = q.options[q.answer];
      }

      const card = document.createElement('div');
      card.className = 'question-card';
      card.style.marginBottom = '1.5rem';
      card.innerHTML = `
        <div class="question-category">${categoryNames[q.category]}</div>
        <div class="question-text" style="font-size:1.05rem; margin-bottom:0.8rem;">${q.question}</div>
        <div style="font-size:0.85rem; color:var(--emerald); margin-bottom:0.8rem;">
          <strong>Correct Answer:</strong> ${answerText}
        </div>
        <div class="explanation-panel" style="margin-top:0; padding: 0.8rem;">
          <div class="explanation-text" style="font-size:0.82rem;">${q.explanation}</div>
        </div>
        <button class="btn btn-secondary btn-danger" style="margin-top:1rem; padding:6px 12px; font-size:0.75rem;" onclick="QuizApp.removeBookmarkDirectly(${q.id})">
          <i class="fas fa-trash-alt"></i> Remove Bookmark
        </button>
      `;
      container.appendChild(card);
    });
  },

  removeBookmarkDirectly(id) {
    const idx = this.bookmarkedIds.indexOf(id);
    if (idx > -1) {
      this.bookmarkedIds.splice(idx, 1);
      localStorage.setItem('deema_bookmarks', JSON.stringify(this.bookmarkedIds));
      this.renderBookmarksList();
    }
  },

  startBookmarksQuiz() {
    AudioSynth.click();
    this.mode = 'practice';
    this.selectedCategory = 'bookmarks';
    
    this.currentQuestions = questionBank.filter(q => this.bookmarkedIds.includes(q.id));
    this.currentQuestions.sort(() => 0.5 - Math.random());
    this.currentIndex = 0;
    this.score = 0;
    this.isAnswered = false;
    this.selectedAnswers = [];

    this.switchView('quiz');
    const timerContainer = document.getElementById('quizTimerContainer');
    if (timerContainer) timerContainer.style.display = 'none';
    this.renderQuestion();
  },

  renderAnalyticsDashboard() {
    const totalQuizzes = this.quizHistory.length;
    const totalQuizzesEl = document.getElementById('totalQuizzesTaken');
    if (totalQuizzesEl) totalQuizzesEl.textContent = totalQuizzes;

    const historyContainer = document.getElementById('historyList');
    if (!historyContainer) return;
    historyContainer.innerHTML = '';

    if (totalQuizzes === 0) {
      historyContainer.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:1rem; font-size:0.85rem;">No historical attempts logged yet.</p>';
      return;
    }

    [...this.quizHistory].reverse().forEach(item => {
      const div = document.createElement('div');
      div.className = 'history-item';
      const pct = Math.round((item.score / item.total) * 100);
      const isLow = pct < 60;
      
      div.innerHTML = `
        <div class="history-info">
          <h4>${item.category === 'all' ? 'All Combined Domains' : categoryNames[item.category]}</h4>
          <span>Date: ${item.date} | Mode: ${item.mode.toUpperCase()}</span>
        </div>
        <div class="history-score ${isLow ? 'low' : ''}">
          ${item.score}/${item.total} (${pct}%)
        </div>
      `;
      historyContainer.appendChild(div);
    });
  },

  updateStatsDashboard() {
    const totalQs = document.getElementById('dashTotalQuestions');
    if (totalQs) totalQs.textContent = questionBank.length;

    const totalBks = document.getElementById('dashTotalBookmarks');
    if (totalBks) totalBks.textContent = this.bookmarkedIds.length;
    
    const attempts = this.quizHistory.length;
    const takenEl = document.getElementById('dashQuizzesTaken');
    if (takenEl) takenEl.textContent = attempts;

    const avgEl = document.getElementById('dashAverageScore');
    if (avgEl) {
      if (attempts > 0) {
        const avg = Math.round(this.quizHistory.reduce((acc, curr) => acc + (curr.score / curr.total), 0) / attempts * 100);
        avgEl.textContent = `${avg}%`;
      } else {
        avgEl.textContent = '--';
      }
    }
  },

  resetHistory() {
    if (confirm("Are you sure you want to clear your quiz history?")) {
      AudioSynth.click();
      this.quizHistory = [];
      localStorage.removeItem('deema_history');
      this.renderAnalyticsDashboard();
      this.updateStatsDashboard();
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  QuizApp.init();
});
