// Deema (دِيمَة) Quiz Database
// Complete questions from all slides (97 items total) without omissions.

const categoryNames = {
  clinical: "Clinical Attachments & Ethics",
  cpr: "Cardiopulmonary Resuscitation (CPR)",
  obesity: "Obesity & Metabolism",
  rf: "Rheumatic Fever (RF)",
  htn: "Hypertension (HTN)",
  hydrocephalus: "Pediatric Hydrocephalus",
  angina: "Angina & Chest Pain"
};

const questionBank = [
  // --- CLINICAL ATTACHMENTS & ETHICS ---
  {
    id: 1,
    category: "clinical",
    question: "For conducting intimate examination under anesthesia or sedation:",
    options: [
      "written consent is not required",
      "verbal consent is only required",
      "written consent is required but it does not replace properly conducted verbal interaction",
      "Without proper discussion with the patient, Consent forms have strong legitimacy"
    ],
    answer: 2,
    explanation: "Written consent is mandatory for examinations under anesthesia/sedation, but it does not replace properly conducted verbal interaction. Consent forms signed without proper discussion lack true legitimacy."
  },
  {
    id: 2,
    category: "clinical",
    question: "As regards chaperones:",
    options: [
      "Should not be a health care professional.",
      "should be present for the protection of patients and students",
      "students should act as chaperones for each other.",
      "Patient companions will be able to fulfil role of role chaperones"
    ],
    answer: 1,
    explanation: "Chaperones protect both the patient (who is in a vulnerable position) and the medical student/clinician (against allegations of misconduct)."
  },
  {
    id: 3,
    category: "clinical",
    question: "intimate examination constitutes examination of:",
    options: [
      "vagina and the breasts rectum or male genitalia",
      "head and neck",
      "abdomen",
      "mouth"
    ],
    answer: 0,
    explanation: "Intimate examinations involve highly sensitive areas: the vagina, breasts, rectum, or male genitalia."
  },
  {
    id: 4,
    category: "clinical",
    question: "as regard Conduct in clinical attachments:",
    options: [
      "should not attend clinics and teaching sessions on time.",
      "Name badges should not be worn.",
      "Dress should not be clean and smart",
      "interact with patients, relatives, and staff in a considerate and professional manner."
    ],
    answer: 3,
    explanation: "Punctuality, wearing name badges, clean attire, and polite, professional interactions with patients and staff are key requirements."
  },
  {
    id: 5,
    category: "clinical",
    question: "Goals of clinical teams’ attachment module do not include:",
    options: [
      "to work as part of a multidisciplinary team",
      "to break bad news and deal with 'challenging' patients",
      "to work in a multicultural environment",
      "to ignore patient expectations",
      "Professionalism"
    ],
    answer: 3,
    explanation: "Ignoring patient expectations is not a goal; understanding and managing patient expectations is essential."
  },
  {
    id: 6,
    category: "clinical",
    question: "As regards the domain of maintaining trust with patients:",
    options: [
      "discriminate unfairly against patients or colleagues.",
      "Be honest and open and act with integrity",
      "abuse your patients’ trust in you or the public’s trust in the profession.",
      "Never justify your decisions and actions"
    ],
    answer: 1,
    explanation: "Trust is built on being honest, open, and acting with complete integrity."
  },
  {
    id: 7,
    category: "clinical",
    question: "Which is not true?",
    options: [
      "work within the limits of your competence.",
      "consult colleagues where appropriate",
      "not respecting the patient’s right to seek a second opinion",
      "provide effective treatments based on the best available evidence"
    ],
    answer: 2,
    explanation: "You must respect the patient's right to seek a second opinion. Restricting it is incorrect and unethical."
  },
  {
    id: 8,
    category: "clinical",
    question: "As regarded (clinical records) should not include:",
    options: [
      "The decisions made and actions agreed, and who is making the decisions and agreeing the actions",
      "The information given to patients",
      "Irrelevant clinical findings.",
      "All drugs prescribed or other investigation or treatment",
      "Name of the person who make the record"
    ],
    answer: 2,
    explanation: "Clinical records must be precise and relevant. Irrelevant clinical findings should not be included."
  },
  {
    id: 9,
    category: "clinical",
    question: "promoting patient safety which is true:",
    options: [
      "Not taking steps to address any problems",
      "taking part in regular reviews and audits of your work and your team.",
      "Not to carry out further training",
      "patient feedback of no value",
      "not respecting patient confidentiality to enhance safety."
    ],
    answer: 1,
    explanation: "Clinical audits and regular reviews of teamwork help identify system issues and ensure patient safety."
  },
  {
    id: 10,
    category: "clinical",
    question: "The theory–practice gap means ;",
    options: [
      "Medicine is theoretical approach",
      "Medicine is based on experience only",
      "You will move from a systematic approach to a hypothetical-reductive approach",
      "None of the above"
    ],
    answer: 2,
    explanation: "The theory-practice gap represents the cognitive shift from rigid rule-following to hypothetical-deductive reasoning based on experience."
  },
  {
    id: 11,
    category: "clinical",
    question: "Fitting in considerations:",
    options: [
      "there are standards of behavior and appearance",
      "remember ethnic factors",
      "A manifest lack of self-care is not accepted",
      "All of the above"
    ],
    answer: 3,
    explanation: "Professional behavior, cleanliness, personal care, and ethnic/cultural sensitivity are vital to fitting in on clinical attachments."
  },
  {
    id: 12,
    category: "clinical",
    question: "Principles of Professionalism:",
    options: [
      "during Working with patients you should maintaining confidentiality and empathy of the patients",
      "Don't putting the care of your patient first",
      "The patient has no rights in medical practice",
      "not communicating clearly and honestly with patients"
    ],
    answer: 0,
    explanation: "Maintaining confidentiality and showing empathy are key principles of medical professionalism."
  },
  {
    id: 13,
    category: "clinical",
    question: "You must do the following ,",
    options: [
      "initiate, alter or stop the treatment of a patient on your own diagnosis;",
      "investigations, must be signed by yourself",
      "take a history from, examine or undertake a procedure on a patient with consent",
      "Work without supervision"
    ],
    answer: 2,
    explanation: "Students must always obtain consent and work under supervision, without signing forms or altering therapies independently."
  },
  {
    id: 14,
    category: "clinical",
    question: "in clinical settings which is not appropriate practice:",
    options: [
      "listen to patients, take account of their views",
      "respond honestly to their questions.",
      "give patients the information they want or need to know in a way they cannot understand",
      "on duty you must be readily accessible to patients and colleagues seeking information, advice, or support"
    ],
    answer: 2,
    explanation: "Giving patients information in a way they cannot understand is inappropriate. You must speak clearly and avoid excessive jargon."
  },
  {
    id: 15,
    category: "clinical",
    question: "Establish and maintain partnerships with patients:",
    options: [
      "never respect their dignity and privacy",
      "treat patients unfairly",
      "Do not be considerate with patient’s relatives",
      "Respect their life choices and beliefs"
    ],
    answer: 3,
    explanation: "Healthy partnerships are built on mutual respect for patients' dignity, personal life choices, and beliefs."
  },
  {
    id: 16,
    category: "clinical",
    question: "professionalism:",
    options: [
      "is only a state of mind",
      "contain many commitments as regards confidentiality, quality of care, patient welfare",
      "lead to low performance and trust",
      "effort you make and your performance are of no value"
    ],
    answer: 1,
    explanation: "Professionalism requires active commitments to confidentiality, clinical quality, and advocating for patient welfare."
  },
  {
    id: 17,
    category: "clinical",
    question: "principles of consent when examining patients:",
    options: [
      "consent is required after a patient is examined",
      "the patient should be informed that you are an expert doctor",
      "the right to withhold or withdraw consent should be made explicit;",
      "Verbal consent has no role"
    ],
    answer: 2,
    explanation: "Consent is ongoing. The patient has the explicit right to refuse or withdraw consent at any point."
  },
  {
    id: 18,
    category: "clinical",
    question: "In providing clinical care you must:",
    options: [
      "provide effective treatments based on the best available evidence base",
      "take all possible steps to leave pain and distress",
      "Don't consult colleagues where appropriate",
      "check that the care or treatment is not compatible with any other treatments"
    ],
    answer: 0,
    explanation: "Clinicians are required to practice evidence-based medicine, delivering treatments supported by clinical evidence."
  },
  {
    id: 19,
    category: "clinical",
    question: "Continuity and coordination of care to the safe transfer of the patients you must ,",
    options: [
      "share all irrelevant information",
      "check, where practical, that a named clinician or team has taken over responsibility",
      "delegate care or refer patients to other health or social care providers is not safe transfer",
      "No considerations for patients with impaired capacity or who are vulnerable for other reasons"
    ],
    answer: 1,
    explanation: "During handovers, you must verify that a specific named clinician or team has accepted responsibility for the patient's care."
  },
  {
    id: 20,
    category: "clinical",
    question: "In situation of conscientious objection to a particular procedure of patients you do the following except ,",
    options: [
      "You must tell them about their right to see another doctor",
      "you must not imply or express disapproval of the patient’s lifestyle",
      "You must tell them about their no right to see another doctor",
      "you must make sure that arrangements are made for another suitably qualified colleague to take over your role"
    ],
    answer: 2,
    explanation: "Doctors with a conscientious objection must inform the patient of their right to see another provider and assist in arranging it, rather than telling them they have no right."
  },
  {
    id: 21,
    category: "clinical",
    question: "If a patient under your care has suffered harm or distress, you should:",
    options: [
      "put matters right (if that is possible)",
      "offer an apology",
      "explain fully and promptly what has happened and the likely short-term and long-term effects.",
      "All of the above"
    ],
    answer: 3,
    explanation: "Open disclosure requires taking immediate steps to resolve the harm, apologizing, and explaining the clinical event."
  },
  {
    id: 22,
    category: "clinical",
    question: "In legal or disciplinary proceedings:",
    options: [
      "must make sure that any evidence you give or documents you write, or sign are false or misleading",
      "must offer all relevant information while following the guidance without Confidentiality",
      "Maintain Confidentiality is mandatory",
      "All information not checked"
    ],
    answer: 2,
    explanation: "Confidentiality is a legal requirement that must be maintained throughout formal proceedings, disclosing information only as permitted by law."
  },
  {
    id: 23,
    category: "clinical",
    question: "If you have accepted a caution from the police or been criticized by an official inquiry you must:",
    options: [
      "Make it as confidential",
      "Tell your organization about the situation without delay",
      "No action to do",
      "None of the above"
    ],
    answer: 1,
    explanation: "You must immediately disclose police cautions or official criticisms to your employing clinical organization."
  },
  {
    id: 24,
    category: "clinical",
    question: "in financial dealings in medical practice . What is true of the following:",
    options: [
      "You mustn't share in financial and commercial dealings",
      "In conflict of interest, you must be open about the conflict, declaring your interest formally, and you should be prepared to exclude yourself from decision making",
      "allow any interests you have to affect the way you prescribe for, treat,",
      "Accept inducement, gift or hospitality that may affect the way you prescribe and treat patients"
    ],
    answer: 1,
    explanation: "Conflicts of interest must be declared, and you should withdraw from purchasing/decisions where a conflict exists."
  },

  // --- OBESITY & METABOLISM ---
  {
    id: 25,
    category: "obesity",
    question: "What is the definition of overweight? (Variant 1)",
    options: [
      "BMI > 25 kg/m²",
      "BMI = 25 kg/m²",
      "BMI 25-29.9 kg/m²",
      "BMI 25-30 kg/m²"
    ],
    answer: 2,
    explanation: "Overweight in adults is defined as a BMI of 25.0 to 29.9 kg/m²."
  },
  {
    id: 26,
    category: "obesity",
    question: "What type of diet is recommended for weight maintenance? (Low CHO Variant)",
    options: [
      "Low protein and low CHO",
      "High protein and high CHO",
      "Low protein and high CHO",
      "High protein and low CHO"
    ],
    answer: 3,
    explanation: "A diet high in protein and low in carbohydrates (CHO) helps preserve muscle tissue and control insulin spikes."
  },
  {
    id: 27,
    category: "obesity",
    question: "The formula for the body mass index is ______:",
    options: [
      "a person’s weight in kilograms squared divided by the square of his/her height in meters (kg²/m²)",
      "a person’s weight in kilograms squared divided by his/her height in meters (kg²/m)",
      "a person’s weight in kilograms divided by his/her height in meters (kg/m)",
      "a person’s weight in kilograms divided by the square of his/her height in meters (kg/m²)"
    ],
    answer: 3,
    explanation: "BMI is defined as Weight (kg) / [Height (m)]²."
  },
  {
    id: 28,
    category: "obesity",
    question: "Medical diagnosis of obesity is based on a BMI cut-off point of: (Variant 1)",
    options: [
      "25.0",
      "30.0",
      "35.0",
      "40.0"
    ],
    answer: 1,
    explanation: "Obesity is defined in adults as a BMI of 30.0 kg/m² or higher."
  },
  {
    id: 29,
    category: "obesity",
    question: "Obesity is defined as BMI: (Pediatric Variant)",
    options: [
      "Below 85th centile.",
      "Above 85th centile.",
      "At 85th centile.",
      "At or above the 95th centile."
    ],
    answer: 3,
    explanation: "In children, obesity is defined as a BMI at or above the 95th percentile for age and sex."
  },
  {
    id: 30,
    category: "obesity",
    question: "Overweight is defined as BMI: (Pediatric Variant)",
    options: [
      "Above 85th centile.",
      "Below 95th centile.",
      "Above 95th centile.",
      "A, B."
    ],
    answer: 3,
    explanation: "Overweight in children is defined as a BMI between the 85th percentile (Above 85th) and the 95th percentile (Below 95th)."
  },
  {
    id: 31,
    category: "obesity",
    question: "Which of the following is incorrect about etiology of obesity?",
    options: [
      "Environmental changes as sedentary lifestyle.",
      "Drugs as cortisone.",
      "Cardiovascular as hypotension.",
      "Endocrine as type 2 DM."
    ],
    answer: 2,
    explanation: "Obesity is associated with hypertension, not hypotension."
  },
  {
    id: 32,
    category: "obesity",
    question: "About management: choose the incorrect statement:",
    options: [
      "Treatment of comorbidities.",
      "Restriction of intake of snacks between meals.",
      "Replacement therapy as thyroxin in hypothyroidism.",
      "Intake of food with high glycemic index."
    ],
    answer: 3,
    explanation: "Obesity management requires restricting high glycemic index (GI) foods, not increasing their intake."
  },
  {
    id: 33,
    category: "obesity",
    question: "Which of the following is contraindicated of bariatric surgery?",
    options: [
      "BMI > 50 kg/m2.",
      "Unresolved eating disorder.",
      "Not responding to other non-surgical treatments.",
      "After failure of intensive lifestyle modifications."
    ],
    answer: 2,
    explanation: "Note: In medical practice, an unresolved eating disorder is a contraindication. However, the slide answer key on Slide 49 lists C as correct (possibly a key error). Unresolved eating disorder is clinically contraindicated."
  },
  {
    id: 34,
    category: "obesity",
    question: "What is the worldwide prevalence of obesity?",
    options: [
      "11%",
      "13%",
      "15%",
      "39%"
    ],
    answer: 1,
    explanation: "Approximately 13% of the world's adult population was clinically obese according to 2016 WHO statistics."
  },
  {
    id: 35,
    category: "obesity",
    question: "What are the main causes of the obesity epidemic?",
    options: [
      "Increased energy quantity/density and a more sedentary life-style",
      "Decreased leisure time activity",
      "Changes in genetic profiles",
      "None of the options given is correct"
    ],
    answer: 0,
    explanation: "High calorie density and physical inactivity are the main drivers of the modern obesity pandemic."
  },
  {
    id: 36,
    category: "obesity",
    question: "Which of the following diseases does obesity increase the risk of developing?",
    options: [
      "Type 2 diabetes",
      "Cancer",
      "Cardiovascular disease",
      "All of the options given are correct"
    ],
    answer: 3,
    explanation: "Obesity is a systemic risk factor linked to diabetes, heart disease, stroke, and several cancers."
  },
  {
    id: 37,
    category: "obesity",
    question: "What is the energy need of a sedentary 43-year old woman who weighs 63 kg?",
    options: [
      "1250 kcal/day",
      "1350 kcal/day",
      "1525 kcal/day",
      "1800 kcal/day"
    ],
    answer: 1,
    explanation: "Calculated energy needs for a sedentary female with these specifications is approximately 1350 kcal/day."
  },
  {
    id: 38,
    category: "obesity",
    question: "What is leptin resistance?",
    options: [
      "Deficiency of leptin caused by a mutation in the leptin gene",
      "Lack of leptin release from the adipose tissue",
      "High concentrations of leptin without reduction in energy intake",
      "Low concentrations of leptin with increased energy intake"
    ],
    answer: 2,
    explanation: "Leptin resistance means the brain does not respond to high levels of leptin, resulting in persistent hunger despite high fat reserves."
  },
  {
    id: 39,
    category: "obesity",
    question: "Why were low-carbohydrate diets not recommended previously?",
    options: [
      "Due to less weight loss efficacy",
      "Due to low adherence to the diet",
      "Due to the high protein content of the diet",
      "Due to possible cardiovascular side-effects"
    ],
    answer: 3,
    explanation: "Mainstream organizations feared high saturated fat intake in low-carb diets could increase cardiovascular risks."
  },
  {
    id: 40,
    category: "obesity",
    question: "What type of diet is recommended for weight maintenance? (Low GI Variant)",
    options: [
      "Low protein and low GI",
      "High protein and high GI",
      "Low protein and high GI",
      "High protein and low GI"
    ],
    answer: 3,
    explanation: "A high protein, low glycemic index (GI) diet maintains lean muscle mass and prolongs satiety."
  },
  {
    id: 41,
    category: "obesity",
    question: "Bariatric surgery is used for obesity treatment but how much is the incidence of type 2 diabetes reduced in obese individuals after surgery?",
    options: [
      "80-90%",
      "No reduction in the incidence",
      "Approximately 50 %",
      "None of the options given is correct"
    ],
    answer: 0,
    explanation: "Bariatric surgery achieves complete remission or significant improvement of type 2 diabetes in 80-90% of cases."
  },
  {
    id: 42,
    category: "obesity",
    question: "Which of the mechanisms below can explain why high protein diets are optimal for weight loss and weight maintenance?",
    options: [
      "Synergistic effect of GLP-1 and PYY on the appetite centers in the brain",
      "Preservation of lean body mass",
      "A higher thermic effect of protein than carbohydrates and fats",
      "All of the options above"
    ],
    answer: 3,
    explanation: "High protein intake promotes gut satiety hormones, prevents muscle wasting, and burns more energy in digestion."
  },
  {
    id: 43,
    category: "obesity",
    question: "The ‘thermic effect’ of fat consumes ______ of energy.",
    options: [
      "2–3%",
      "5–15%",
      "15–25%",
      "20–35%"
    ],
    answer: 0,
    explanation: "Dietary fat has the lowest thermic cost of storage (2-3%), compared to protein (20-35%)."
  },
  {
    id: 44,
    category: "obesity",
    question: "What causes obesity?",
    options: [
      "Genetics",
      "Poor eating habits",
      "Lack of physical activity",
      "All of the above"
    ],
    answer: 3,
    explanation: "Obesity is a complex multifactorial disease involving genetic predisposition, lifestyle choices, and environments."
  },
  {
    id: 45,
    category: "obesity",
    question: "Bariatric surgery may be recommended for people with a BMI of more than 40. What does the procedure involve?",
    options: [
      "Closing off parts of the stomach to make it smaller",
      "Bypassing the stomach",
      "Removing parts of the stomach",
      "All of the above"
    ],
    answer: 3,
    explanation: "Bariatric procedures can be restrictive (sleeve gastrectomy, gastric banding) or malabsorptive (gastric bypass)."
  },
  {
    id: 46,
    category: "obesity",
    question: "Which of these serious health problems has been linked to obesity?",
    options: [
      "Type 2 diabetes",
      "Heart disease",
      "High blood pressure",
      "Stroke",
      "All of the above"
    ],
    answer: 4,
    explanation: "Obesity is pathologically linked to all these conditions, secondary to systemic inflammation, vascular resistance, and metabolic stress."
  },
  {
    id: 47,
    category: "obesity",
    question: "The following is a cause of obesity : -",
    options: [
      "Renal failure",
      "Liver cell failure",
      "Hypothyroidism",
      "Heart failure",
      "COPD"
    ],
    answer: 2,
    explanation: "Hypothyroidism causes a hypometabolic state, reducing energy expenditure and leading to weight gain."
  },
  {
    id: 48,
    category: "obesity",
    question: "Medical diagnosis of obesity is based on a BMI cut-off point of : (Variant 2)",
    options: [
      "25",
      "30",
      "35",
      "40",
      "20"
    ],
    answer: 1,
    explanation: "A BMI threshold of 30.0 defines obesity. Below 25 is normal, 25-29.9 is overweight, and below 18.5 is underweight."
  },

  // --- RHEUMATIC FEVER & CHEST PAIN & ANGINA ---
  {
    id: 49,
    category: "rf",
    question: "The minor criteria of rheumatic fever includes?",
    options: [
      "Migratory arthralgia",
      "Carditis and valvulitis",
      "Erythema marginatum",
      "Subcutaneous nodules"
    ],
    answer: 0,
    explanation: "Arthralgia is a minor criterion. Carditis, Erythema marginatum, and Subcutaneous nodules are major criteria."
  },
  {
    id: 50,
    category: "rf",
    question: "The major criteria of rheumatic fever includes",
    options: [
      "Migratory arthritis",
      "pancarditis",
      "Erythema marginatum",
      "All of the above"
    ],
    answer: 3,
    explanation: "Major Jones criteria are Pancarditis, Migratory arthritis, Sydenham's chorea, Erythema marginatum, and Subcutaneous nodules."
  },
  {
    id: 51,
    category: "rf",
    question: "Arthritis in Rhematic fever?",
    options: [
      "inflammation affecting single joint only",
      "inflammation affects several joints , each joint inflammation lasts for few days to a week",
      "Always associated with Subcutaneous nodules",
      "Non-migratory."
    ],
    answer: 1,
    explanation: "Rheumatic arthritis is classically a migratory (fleeting) polyarthritis affecting large joints sequentially."
  },
  {
    id: 52,
    category: "htn",
    question: "BP readings persistently more than 140/90 defined as?",
    options: [
      "Pre-Hypertension",
      "Normal BP",
      "Malignant HTN",
      "Hypertension. Essential hypertension"
    ],
    answer: 3,
    explanation: "Hypertension is defined as persistent clinic blood pressure readings equal to or above 140/90 mmHg."
  },
  {
    id: 53,
    category: "htn",
    question: "The commonest cause of secondary HTN is? (Variant 1)",
    options: [
      "Cushing's disease",
      "Conns syndrome",
      "Renal and Reno-vascular diseases",
      "pheochromocytoma"
    ],
    answer: 2,
    explanation: "Renal parenchymal disease and renal artery stenosis are the most common secondary causes."
  },
  {
    id: 54,
    category: "htn",
    question: "Which of the following is the commonest presentation of HTN?",
    options: [
      "Headache",
      "Dizziness",
      "Fatigue",
      "Asymptomatic"
    ],
    answer: 3,
    explanation: "About 90% of hypertensive patients are asymptomatic, earning it the name 'the silent killer'."
  },
  {
    id: 55,
    category: "rf",
    question: "The probability of acute rheumatic fever is high when there is ?",
    options: [
      "group A streptococcal infection followed by two major manifestations or one major and two minor manifestations",
      "two major manifestations",
      "one major and two minor manifestations .",
      "Two minor manifestations",
      "Migratory arthritis alone"
    ],
    answer: 0,
    explanation: "Diagnosis requires evidence of a preceding GAS infection plus 2 major OR 1 major and 2 minor criteria."
  },
  {
    id: 62,
    category: "rf",
    question: "Rheumatic.Fever usually follows an infection with",
    options: [
      "Streptococcus group A",
      "Staphylococcus aureus",
      "Streptococcus viridans",
      "H.influenza"
    ],
    answer: 0,
    explanation: "Acute Rheumatic Fever is a post-infectious autoimmune sequel following pharyngitis caused by Streptococcus group A."
  },
  {
    id: 56,
    category: "rf",
    question: "One of the tests that is done to confirm diagnosis of R.F",
    options: [
      "Alpha 1 antitrypsin",
      "Rheumatoid factor",
      "Anti-streptolysin O",
      "Creatine kinase"
    ],
    answer: 2,
    explanation: "An ASO titer of >200 proves preceding streptococcal infection, helping confirm a suspected RF diagnosis."
  },
  {
    id: 57,
    category: "rf",
    question: "To diagnose a patient with R.F, The patient should have at least:",
    options: [
      "A. One major, two minor",
      "B. Two major , one minor",
      "C. One major , one minor",
      "D. Two major , two minor"
    ],
    answer: 0,
    explanation: "A standard combination to satisfy Jones criteria is 1 major and 2 minor criteria (with evidence of GAS)."
  },
  {
    id: 58,
    category: "rf",
    question: "Which valves are commonly affected by R.F:",
    options: [
      "A. Tricuspid , mitral",
      "B. Mitral , Aortic",
      "C. Tricuspid , pulmonary",
      "D. Aortic , pulmonary"
    ],
    answer: 1,
    explanation: "Left-sided heart valves (mitral and aortic) are the main targets of rheumatic endocarditis."
  },
  {
    id: 59,
    category: "rf",
    question: "Which of the following is one of Jone’s major criteria?",
    options: [
      "A. Pancarditis",
      "B. Fever",
      "C. Elevated ESR",
      "D. Previous RF"
    ],
    answer: 0,
    explanation: "Pancarditis is a major criterion. Fever, elevated ESR, and previous history are minor criteria or context."
  },
  {
    id: 60,
    category: "htn",
    question: "Which of the following organs is not affected by HTN?",
    options: [
      "heart",
      "kidney",
      "Eye",
      "Joints"
    ],
    answer: 3,
    explanation: "HTN damages blood vessels (heart, brain, kidney, eye), but does not directly target joint tissue."
  },
  {
    id: 61,
    category: "htn",
    question: "Hypertension is commonly called:",
    options: [
      "A- The stunt killer",
      "B- The stealthy killer",
      "C- The secret killer",
      "D -The silent killer"
    ],
    answer: 3,
    explanation: "It is called the silent killer because it is usually asymptomatic until causing acute damage."
  },
  {
    id: 63,
    category: "angina",
    question: "What are the two categories of angina? (Variant 1)",
    options: [
      "stable and unstable",
      "chronic and acute",
      "severe and mild",
      "arterial and venous"
    ],
    answer: 0,
    explanation: "Angina pectoris is classified clinically as either stable or unstable."
  },
  {
    id: 64,
    category: "htn",
    question: "the most common cause of Hypertension is:",
    options: [
      "a) Reno-vascular diseases",
      "b) Cushing's disease : -",
      "c) Essential hypertension.",
      "d) Coarctation of the Aorta",
      "e) Polycythemia."
    ],
    answer: 2,
    explanation: "Essential (primary) hypertension accounts for 90-95% of cases."
  },
  {
    id: 65,
    category: "htn",
    question: "The most common cause of secondary HTN is: (Variant 2)",
    options: [
      "a. Cushing's disease",
      "b. Conns syndrome",
      "c. Renal and Reno-vascular diseases",
      "d. Pheochromocytoma",
      "e. Thyrotoxicosis."
    ],
    answer: 2,
    explanation: "Renal disease is the single most common etiology of secondary hypertension."
  },
  {
    id: 66,
    category: "htn",
    question: "The commonest cause of Hypertension in child with 5 years old is: -",
    options: [
      "a) Primary Hypertention",
      "b) Wilm s tumor",
      "c) Renal structural and inflammatory diseases",
      "d) Cushing syndrome",
      "e) Drug induced Hypertension-"
    ],
    answer: 2,
    explanation: "In young children, secondary HTN from renal structural/inflammatory diseases is most frequent."
  },
  {
    id: 67,
    category: "angina",
    question: "What are the two categories of angina? (Variant 2)",
    options: [
      "a. stable and unstable",
      "b. chronic and acute",
      "c. severe and mild",
      "d. d-arterial and venous",
      "e. e- small and large."
    ],
    answer: 0,
    explanation: "Clinically classified into stable (exertional) and unstable (acute coronary syndrome component)."
  },
  {
    id: 68,
    category: "angina",
    question: "What are the characteristics of stable angina?",
    options: [
      "a) Severe , crushing and lasting for more than 30 minutes.",
      "b) chest pain tha occurs at rest.",
      "c) Bradycardia.",
      "d) chest pain that occurs with exertion and/or mental stress.",
      "e) Hypotension."
    ],
    answer: 3,
    explanation: "Stable angina is chest pain provoked predictably by exertion or stress and relieved by rest."
  },
  {
    id: 69,
    category: "rf",
    question: "A patient with R.F comes with dancing movement, how can you explain this movement:",
    options: [
      "A. Myopathy",
      "B. Neuromuscular junction disease",
      "C. Sydenham's chorea"
    ],
    answer: 2,
    explanation: "Involuntary dancing movements represent Sydenham's chorea, a major Jones criterion of RF."
  },
  {
    id: 70,
    category: "rf",
    question: "Which of the following is a complication of RF?",
    options: [
      "A. Valve regurgitation",
      "B. Damage to heart muscle",
      "C. Heart failure",
      "D. All of the above"
    ],
    answer: 3,
    explanation: "Rheumatic carditis is a pancarditis affecting the endocardium (valves), myocardium, and pericardium."
  },
  {
    id: 71,
    category: "rf",
    question: "Acute rheumatic fever (ARF) is",
    options: [
      "a- suppurativesequel of group A streptococcus infection",
      "b- heart disease that occurs two to four days after group A streptococcuspharyngitis.",
      "c- heart disease that occurs 2- 4 weeks after group A streptococcus pharyngitis.",
      "d- heart disease that occurs 2- 4 wks following group B streptococcus pharyngitis."
    ],
    answer: 2,
    explanation: "ARF is a non-suppurative autoimmune complication manifesting 2 to 4 weeks after GABHS pharyngitis."
  },

  // --- HYDROCEPHALUS ---
  {
    id: 72,
    category: "hydrocephalus",
    question: "CSF is formed by active secretion by the choroid plexus in the:-",
    options: [
      "a. Fourth ventricle.",
      "b. Third ventricle.",
      "c. Lateral ventricle.",
      "d. Sub arachnoid space."
    ],
    answer: 2,
    explanation: "Choroid plexus actively secretes CSF, with the bulk produced in the lateral ventricles."
  },
  {
    id: 73,
    category: "hydrocephalus",
    question: "Passage of CSF from the third ventricle to the fourth ventricle is from:-",
    options: [
      "a. Foramen of monoro.",
      "b. Foramen of luscka.",
      "c. Foramen of magendi.",
      "d. Aqueduct of sylvius."
    ],
    answer: 3,
    explanation: "The Aqueduct of Sylvius (cerebral aqueduct) connects the 3rd and 4th ventricles."
  },
  {
    id: 74,
    category: "hydrocephalus",
    question: "CSF is absorbed from :-",
    options: [
      "a. Dural sinuses.",
      "b. Arachnoid villi.",
      "c. Heart.",
      "d. Lateral ventricle."
    ],
    answer: 1,
    explanation: "CSF is reabsorbed into the dural venous system through the arachnoid villi."
  },
  {
    id: 75,
    category: "hydrocephalus",
    question: "Benign external hydrocephalus is relatively common Cause of macrocephaly in infancy and this condition is :-",
    options: [
      "a. Require shunt operation.",
      "b. Need dehydration measures.",
      "c. Self-limited.",
      "d. Carbonic anhydrase inhibitor."
    ],
    answer: 2,
    explanation: "Benign external hydrocephalus is a self-limiting condition of infancy that resolves without surgery."
  },
  {
    id: 76,
    category: "hydrocephalus",
    question: "Hydrocephalus ex vacua (relative hydrocephalus) is refer to :-",
    options: [
      "a. Enlargement of CSF due to reduced volume of brain tissue.",
      "b. Enlargement of CSF with increase intracranial pressure.",
      "c. Benign enlargement of subarachnoid space.",
      "d. Sub dural effusion."
    ],
    answer: 0,
    explanation: "Hydrocephalus ex vacua is ventricular expansion in response to cerebral tissue loss (atrophy)."
  },
  {
    id: 77,
    category: "hydrocephalus",
    question: "Obstructed hydrocephalus with enlarged only third ventricle due to obstruction of:-",
    options: [
      "a. Foramen of monoro.",
      "b. Aqueduct of sylviuse.",
      "c. Foramen of luscka.",
      "d. Foramen of magendi."
    ],
    answer: 1,
    explanation: "Obstruction of the aqueduct of Sylvius dilates the lateral and 3rd ventricles, leaving the 4th ventricle normal."
  },
  {
    id: 78,
    category: "hydrocephalus",
    question: "The most common cause of congenital hydrocephalus due to:-",
    options: [
      "a. Congenital atresia of foramen of monoro.",
      "b. Congenital infection.",
      "c. Congenital atresia of aqueduct of sylvius.",
      "d. Papilloma of choroid plexus."
    ],
    answer: 2,
    explanation: "Congenital stenosis of the aqueduct of Sylvius is the most common cause of congenital hydrocephalus."
  },
  {
    id: 79,
    category: "hydrocephalus",
    question: "Non obstructive hydrocephalus due to excessive CSF production due to :-",
    options: [
      "a. Adhesion of subarachnoid space.",
      "b. Dural sinus thrombosis.",
      "c. Tumor of choroid plexus.",
      "d. Infiltration in sub arachnoid space."
    ],
    answer: 2,
    explanation: "A tumor of the choroid plexus (papilloma) leads to excessive active production of CSF."
  },
  {
    id: 80,
    category: "hydrocephalus",
    question: "In older children with hydrocephalus with increase intra cranial pressure is characterized by :-",
    options: [
      "a. Progressive enlargement of head circumference.",
      "b. Scalp vein dilatation.",
      "c. Severe headache.",
      "d. Craniotabes."
    ],
    answer: 2,
    explanation: "Since sutures are closed in older children, head size is constant and they present with severe headaches from high ICP."
  },
  {
    id: 81,
    category: "hydrocephalus",
    question: "Sun set eyes is characterized by :-",
    options: [
      "a. Forward and up word displacement of eye",
      "b. Forward and down word displacement of eye",
      "c. Papilledema",
      "d. Down word and deviation of eye to the right side"
    ],
    answer: 1,
    explanation: "Sunset eyes represent downward displacement of the iris below the lower eyelid due to high pressure on the tectum."
  },
  {
    id: 82,
    category: "hydrocephalus",
    question: "Macwen sign in hydrocephalic infant is characterized by",
    options: [
      "a. Craniotabes.",
      "b. Wide separation of suture.",
      "c. Cracked pot sound on skull percussion.",
      "d. Scalp vein dilatation."
    ],
    answer: 2,
    explanation: "Percussion of the skull when sutures are separated yields a 'cracked pot' resonance (Macewen's sign)."
  },
  {
    id: 83,
    category: "hydrocephalus",
    question: "Manifestation of increased intracranial pressure most common in:-",
    options: [
      "a. Neonatal hydrocephalus.",
      "b. In infancy.",
      "c. In older children.",
      "d. In early children."
    ],
    answer: 2,
    explanation: "Symptoms of high ICP are most prominent in older children due to their rigid, closed skulls."
  },
  {
    id: 84,
    category: "hydrocephalus",
    question: "Cushing response in hydrocephalic children is characterized by :-",
    options: [
      "a. Tachycardia and hypertension.",
      "b. Bradycardia and hypotension.",
      "c. Tachycardia and hypertension.",
      "d. Bradycardia and hypertension."
    ],
    answer: 3,
    explanation: "Cushing response is a reflex to high ICP, presenting as bradycardia, hypertension, and irregular respirations."
  },
  {
    id: 85,
    category: "hydrocephalus",
    question: "Plain X ray skull of hydrocephalus which characterized by silver beaten appearance:-",
    options: [
      "a. Commonly in infant.",
      "b. Commonly after closure of sutures.",
      "c. Commonly before closure of sutures.",
      "d. Commonly in early child hood."
    ],
    answer: 1,
    explanation: "The silver-beaten gyral impressions develop over time when the brain presses against a closed, rigid skull."
  },
  {
    id: 86,
    category: "hydrocephalus",
    question: "The main management of obstructive hydrocephalus is :-",
    options: [
      "a. by pass (shunt operation)",
      "b. Dehydration measures.",
      "c. Restriction of fluids.",
      "d. Carbonic anhydrase inhibitors."
    ],
    answer: 0,
    explanation: "Obstruction requires surgical diversion (bypassing) of CSF, typically with a VP shunt."
  },
  {
    id: 87,
    category: "hydrocephalus",
    question: "A baby with Hydrocephalus present with which of the following clinical signs:",
    options: [
      "a) Upward looking eyes",
      "b) Small sized head",
      "c) Early closed fontanelles",
      "d) Wide separated sutures",
      "e) Good mentality in chronic cases"
    ],
    answer: 3,
    explanation: "Open infant skulls respond to high fluid pressure by widening and separating the sutures."
  },
  {
    id: 88,
    category: "hydrocephalus",
    question: "A baby with Hydrocephalus may present with which of the following clinical signs? (Select the 4 correct answers)",
    options: [
      "Bulging fontanelle [Correct]",
      "Unusually large head [Correct]",
      "Downward looking eyes [Correct]",
      "Bulging eyes",
      "Thin, shiny scalp with easily visible veins [Correct]",
      "Upward looking eyes",
      "Unusually small head"
    ],
    answer: 0, // Treated specially in frontend if custom, but mapped to option 0 as primary key for standard layout
    explanation: "Clinical signs in infants are bulging fontanelle, large head, sunset eyes, and visible scalp veins.",
    isMultiSelect: true,
    correctAnswers: [0, 1, 2, 4]
  },

  // --- CARDIOPULMONARY RESUSCITATION (CPR) ---
  {
    id: 89,
    category: "cpr",
    question: "During cardiac arrest, what happens to a person?",
    options: [
      "A) The heart is still beating and pumping blood, and the person is still alive",
      "B) …The heart stops beating, the person doesn’t respond, and the person isn’t breathing normally",
      "C) …The heart is still beating, the person isn’t breathing normally, and blood stops moving",
      "D) …The heart is still beating and pumping blood, but the person isn’t breathing normally"
    ],
    answer: 1,
    explanation: "Cardiac arrest is the sudden loss of heart function, rendering the patient unresponsive and pulseless."
  },
  {
    id: 90,
    category: "cpr",
    question: "Which is the correct first step when you arrive at a scene where a person has collapsed?",
    options: [
      "A) …Tap and shout",
      "B) …Phone 9-1-1 and get an AED (if available)",
      "C) Make sure the scene is safe",
      "D) …Check for breathing"
    ],
    answer: 2,
    explanation: "Always check scene safety first to avoid becoming a victim yourself."
  },
  {
    id: 91,
    category: "cpr",
    question: "When you do Hands-Only CPR, how many chest compressions should you perform each minute?",
    options: [
      "A) …About 50",
      "B) …100 to 120",
      "C) …130 to 150",
      "D) …150 to 200"
    ],
    answer: 1,
    explanation: "Deliver chest compressions at a rate of 100 to 120 beats per minute to maintain perfusion."
  },
  {
    id: 92,
    category: "cpr",
    question: "Once you shout for help, what are the next steps for providing Hands-Only CPR?",
    options: [
      "A) …Phone 9-1-1 and get an AED (if available), check for breathing, and begin compressions.",
      "B) …Begin compressions, check for breathing, and phone 9-1-1 and get an AED (if available).",
      "C) …Phone 9-1-1 and get an AED (if available), begin compressions, and check for breathing.",
      "D) …Check for breathing, begin compressions, and phone 9-1-1 and get an AED (if available)."
    ],
    answer: 0,
    explanation: "The correct sequence is: activate emergency services/AED, check breathing/pulse, and begin compressions."
  },
  {
    id: 93,
    category: "cpr",
    question: "What is the most important thing to remember when performing CPR on a child?",
    options: [
      "A) …Children need breaths with compressions",
      "B) …Child CPR is similar to adult CPR",
      "C) …A child is 1 year or older but not a teenager",
      "D) Children usually have healthy hearts"
    ],
    answer: 0,
    explanation: "Children typically suffer respiratory arrest first, making oxygenation via rescue breaths essential."
  },
  {
    id: 94,
    category: "cpr",
    question: "When you perform CPR with breaths on an adult, how many breaths do you give after every 30 compressions?",
    options: [
      "A) …2 breaths",
      "B) …4 breaths",
      "C) …6 breaths",
      "D) …8 breaths"
    ],
    answer: 0,
    explanation: "The standard single-rescuer ratio is 30 compressions followed by 2 breaths."
  },
  {
    id: 95,
    category: "cpr",
    question: "The critical characteristics of high-quality CPR include which of the following?",
    options: [
      "A) Minimize interruptions",
      "B) Starting chest compressions within 10 seconds of recognition of cardiac arrest",
      "C) Push hard and fast",
      "D) All of the above"
    ],
    answer: 3,
    explanation: "High-quality CPR requires minimizing pauses, proper depth/rate, full chest recoil, and early starts."
  },
  {
    id: 96,
    category: "cpr",
    question: "The proper steps for operating an AED are ?",
    options: [
      "A) Power on the AED, attach electrode pads, shock the patient, analyze the rhythm",
      "B) Check pulse, attach electrode pads, analyze rhythm, shock patient",
      "C) Attach electrode pads, check pulse, shock patient, analyze rhythm",
      "D) Power on the AED, attach electrode pads, analyze the rhythm, clear the patient, deliver shock"
    ],
    answer: 3,
    explanation: "Power on the AED immediately, attach pads, analyze, stand clear, and deliver the shock."
  },
  {
    id: 97,
    category: "cpr",
    question: "Where should you attempt to perform a pulse check in a child from 1 year of age to puberty?",
    options: [
      "A) Carotid or Femoral artery",
      "B) Brachial artery",
      "C) Temporal artery",
      "D) Ulnar artery"
    ],
    answer: 0,
    explanation: "In children, check the carotid artery or the femoral artery. For infants under 1, check the brachial artery."
  },
  {
    id: 98,
    category: "cpr",
    question: "How often should rescuers switch roles when performing 2-rescuer CPR?",
    options: [
      "A) After every 2 cycles of CPR",
      "B) After every 5 cycles of CPR",
      "C) After every 10 cycles of CPR",
      "D) After every cycle of CPR"
    ],
    answer: 1,
    explanation: "Switch roles every 5 cycles (2 minutes) to prevent fatigue and preserve compression quality."
  },
  {
    id: 99,
    category: "cpr",
    question: "The 5 links in the adult Chain of Survival include all of the following EXCEPT:",
    options: [
      "A) Early CPR",
      "B) Advanced airway placement",
      "C) Rapid Defibrillation",
      "D) Integrated Post-Cardiac Arrest Care"
    ],
    answer: 1,
    explanation: "The Chain of Survival covers: Recognition, CPR, Defibrillation, ALS, and Post-Arrest Care. Advanced airway placement is a specific clinical maneuver, not a standalone link."
  }
];
