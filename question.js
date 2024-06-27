let questions = [
  {
    numb: 1,
    question: "Which immunodominant sugar confers A antigen specificity?",
    answer: "N-Acetylgalactosamine",
    options: [
      "D-Galactose",
      "L-Fucose",
      "N-Acetylgalactosamine",
      "Both A and C"
    ]
  },
  {
    numb: 2,
    question: "If a patient has an A2 ABO type, which of the following statements is true?",
    answer: "The patient’s serum will react with A1 cells if anti-A1 is present",
    options: [
      "The patient’s red cells will react with anti-A1 lectin",
      "The patient’s serum will react with A2 cells",
      "The patient’s red cells will react with anti-A2 lectin",
      "The patient’s serum will react with A1 cells if anti-A1 is present"
    ]
  },
  {
    numb: 3,
    question: "Which genotype confers the Bombay blood type?",
    answer: "hh",
    options: [
      "Hh",
      "hh",
      "Sese",
      "Lele"
    ]
  },
  {
    numb: 4,
    question: "Which genes encode for Rh antigens?",
    answer: "Both b and c",
    options: [
      "RHDCE",
      "RHD",
      "RHCE",
      "Both b and c"
    ]
  },
  {
    numb: 5,
    question: "Testing for the D antigen was conducted at the IAT phase. A control was included in the testing. Both the patient’s red cells and the control tube reacted at 4+. How would you interpret this test?",
    answer: "The test is invalid because the control tube was positive",
    options: [
      "The test is invalid because the control tube was positive",
      "The patient is D positive",
      "The patient is D negative",
      "The test should be repeated and the control tube omitted"
    ]
  },
  {
    numb: 6,
    question: "Of the red cells listed, which has the most D antigen present?",
    answer: "D",
    options: [
      "Rh null",
      "D positive",
      "dce/dce",
      "D"
    ]
  },
  {
    numb: 7,
    question: "Which is true of the Duffy blood group system?",
    answer: "Fya and Fyb are codominant alleles",
    options: [
      "Antigens are resistant to enzyme treatment",
      "Antibodies never show dosage",
      "Fya and Fyb are codominant alleles",
      "The majority of whites are Fy(a—b—)"
    ]
  },
  {
    numb: 8,
    question: "Which antibody is typically considered to be an autoantibody if found in the serum of an adult?",
    answer: "Anti-I",
    options: [
      "Anti-K",
      "Anti-I",
      "Anti-D",
      "Anti-Fya"
    ]
  },
  {
    numb: 9,
    question: "Which reagent destroys all of the Kell blood group system antigens?",
    answer: "DTT",
    options: [
      "DTT",
      "Chloroquine diphosphate",
      "AHG",
      "LISS"
    ]
  },
  {
    numb: 10,
    question: "Which is true of antibodies to Kidd blood group system antigens?",
    answer: "Both A and B",
    options: [
      "They are enhanced by enzymes",
      "Titers can quickly drop in patients",
      "Both A and B",
      "None of the above"
    ]
  },
  {
    numb: 11,
    question: "Which of the following is true of the Lewis system?",
    answer: "Antibodies to Lewis antigens rarely cross the placenta",
    options: [
      "Lewis antigens are found on type II precursor cells",
      "Lewis antigens are well developed at birth",
      "Antibodies to Lewis antigens always cause HTRs",
      "Antibodies to Lewis antigens rarely cross the placenta"
    ]
  },
  {
    numb: 12,
    question: "Which of the following is true of antibodies to MNS blood group system antigens?",
    answer: "Anti-U is directed at a high-incidence antigen",
    options: [
      "Anti-U is directed at a high-incidence antigen",
      "Anti-N is commonly found",
      "Anti-M is always clinically significant",
      "Anti-S is reactive with enzyme-treated cells"
    ]
  },
  {
    numb: 13,
    question: "Which of the following antibodies is classified as “biphasic” and an autoantibody?",
    answer: "Anti-P",
    options: [
      "Anti-B",
      "Anti-P",
      "Anti-H",
      "Anti-Lea"
    ]
  },
  {
    numb: 14,
    question: "You have performed an antibody screen using the tube method. All three screening cells tested negative. The Coombs check cells in all three tubes are also nonreactive. What should you do?",
    answer: "Repeat the antibody screen",
    options: [
      "Respin the tubes and reread them",
      "Report the antibody screen as negative",
      "Repeat the antibody screen",
      "Perform an antibody identification panel"
    ]
  },



  //

    {
      numb: 15,
      question: "An antibody panel has six 2+ reactive cells at AHG phase. Panel testing using enzyme-treated cells showed no reactivity. Which is the most likely antibody that is present?",
      answer: "Anti-Fya",
      options: [
        "Anti-Fya",
        "Anti-e",
        "Anti-k",
        "Anti-Lua"
      ]
    },
    {
      numb: 16,
      question: "A patient has a currently nonreactive antibody screen but has a history of anti-Jka in the patient file. Which type of crossmatch must be performed on this patient?",
      answer: "IAT crossmatch",
      options: [
        "Immediate spin crossmatch",
        "IAT crossmatch",
        "Electronic crossmatch",
        "Both a and c"
      ]
    },
    {
      numb: 17,
      question: "A recently transfused patient has a 3+ reactive DAT with anti-IgG. Which procedure should be used to identify the specificity of the IgG antibody attached to the red cells?",
      answer: "Elution",
      options: [
        "Adsorption",
        "Neutralization",
        "Titration",
        "Elution"
      ]
    },
    {
      numb: 18,
      question: "An O-negative mother gave birth to an O-positive baby. Her rosette test was positive. Which of the following is true?",
      answer: "A Kleihauer-Betke test should be performed to quantify the fetal maternal hemorrhage",
      options: [
        "The test is invalid because of the mother’s ABO type",
        "A Kleihauer-Betke test should be performed to quantify the fetal maternal hemorrhage",
        "The mother should be given a 300-mg dose of RhIG",
        "A weak D test should be performed on the baby"
      ]
    },
    {
      numb: 19,
      question: "In which of the following settings are platelet transfusions not indicated?",
      answer: "Thrombotic thrombocytopenic purpura",
      options: [
        "Thrombotic thrombocytopenic purpura",
        "Immune thrombocytopenic purpura with severe intracranial hemorrhage",
        "Massive transfusion",
        "Vascular catheter placement, platelet count 24,000/mL",
        "Brain biopsy, platelet count 62,000/mL"
      ]
    },
    {
      numb: 20,
      question: "An obstetric patient presents to the hospital with marked vaginal bleeding and severe lower abdominal pain. During placement of an intravenous catheter, she was noted to have marked oozing. She is diagnosed with disseminated intravascular coagulation as a complication of her primary problem. She is given cryoprecipitate and fresh frozen plasma before going to the operating room. What element of cryoprecipitate is important in treating this patient?",
      answer: "Factor I",
      options: [
        "Factor I",
        "Factor II",
        "Factor VIII:c",
        "Factor VIII:vWF",
        "Factor XIII"
      ]
    },
    {
      numb: 21,
      question: "A patient’s ABO blood type is determined by which of the following?",
      answer: "Genetic inheritance",
      options: [
        "Genetic inheritance and environmental factors",
        "Genetic inheritance",
        "Environmental factors",
        "Immune function",
        "Maternal blood type"
      ]
    },

    //
  
      {
        numb: 22,
        question: "A trauma patient with type AB is seen at a rural hospital. The hospital only has 3 units of type AB RBCs. What blood type of RBCs can the patient receive as an alternative?",
        answer: "All of the above",
        options: [
          "Type O",
          "Type B",
          "Type A",
          "None of the above",
          "All of the above"
        ]
      },
      {
        numb: 23,
        question: "A genetic state in which no detectable trait exists is called:",
        answer: "Amorph",
        options: [
          "Recessive",
          "Dominant",
          "Incomplete dominance",
          "Amorph"
        ]
      },
      {
        numb: 24,
        question: "Most blood group antigens are expressed as a result of which of the following?",
        answer: "Autosomal codominant inheritance",
        options: [
          "Autosomal recessive inheritance",
          "X-linked dominant inheritance",
          "Y-linked recessive inheritance",
          "Autosomal codominant inheritance"
        ]
      },
      {
        numb: 25,
        question: "What blood type is not possible for the offspring of AO and BO parents?",
        answer: "All are possible",
        options: [
          "AB",
          "A or B",
          "O",
          "All are possible"
        ]
      },
      {
        numb: 26,
        question: "How many molecules of IgM are needed to fix complement?",
        answer: "1",
        options: [
          "1",
          "2",
          "3",
          "4"
        ]
      },
      {
        numb: 27,
        question: "For lysis of red blood cells to occur after antigen–antibody reaction, which compound is required?",
        answer: "Complement",
        options: [
          "Albumin",
          "Glucose-6-phosphate dehydrogenase (G6PD)",
          "Complement",
          "Antihuman globulin (AHG)"
        ]
      },
      {
        numb: 28,
        question: "An end-point of tube testing other than agglutination that must also be considered a positive reaction is called:",
        answer: "Hemolysis",
        options: [
          "Clumping",
          "Mixed field",
          "Hemolysis",
          "Microscopic"
        ]
      },

      //


  
        {
          numb: 29,
          question: "Mixed-field (mf) agglutination can be observed in the:",
          answer: "DAT on a person undergoing delayed hemolytic transfusion reaction",
          options: [
            "DAT on a person undergoing delayed hemolytic transfusion reaction",
            "IAT result of a patient who has anti-Lea",
            "DAT on a patient on high doses of penicillin",
            "Typing result with anti-A of a patient who is A2 subgroup"
          ]
        },
        {
          numb: 30,
          question: "In which situation(s) may the ABO serum grouping not be valid?",
          answer: "All of the above",
          options: [
            "The patient has hypogammaglobulinemia",
            "IgM antibodies are present",
            "Cold autoantibodies are present",
            "All of the above"
          ]
        },
        {
          numb: 31,
          question: "If you knew the DAT is positive, what would you expect the Rh control to be when doing a weak D test through AHG?",
          answer: "Positive",
          options: [
            "Negative",
            "Positive",
            "Mixed field",
            "Hemolysis at 37 C would be seen"
          ]
        },
        {
          numb: 32,
          question: "How can IgG antibodies be removed from red cells?",
          answer: "Elution",
          options: [
            "Elution",
            "Adsorption",
            "Prewarming",
            "Neutralization"
          ]
        },
        {
          numb: 33,
          question: "Testing needs to be done with an antiserum that is rarely used. The appropriate steps to take in using this antiserum include following the manufacturer’s procedure and:",
          answer: "Testing a cell that is negative for the antigen and one that is heterozygous for the antigen",
          options: [
            "Performing a cell panel to be sure that the antiserum is performing correctly",
            "Performing the testing on screen cells",
            "Testing in duplicate to ensure the repeatability of the results",
            "Testing a cell that is negative for the antigen and one that is heterozygous for the antigen"
          ]
        },
        {
          numb: 34,
          question: "Based on the following antigram, which cell is heterozygous for M?",
          answer: "Cell 1",
          options: [
            "Cell 1",
            "Cell 2",
            "Cell 3",
            "None of the above"
          ]
        },
        {
          numb: 35,
          question: "Which antibody can be neutralized with a specific reagent?",
          answer: "Anti-Lea",
          options: [
            "Anti-D",
            "Anti-Jka",
            "Anti-M",
            "Anti-Lea"
          ]
        },
        {
          numb: 36,
          question: "Group O red blood cells are used as a source of commercial screening cells because:",
          answer: "ABO antibodies do not react with group O cells",
          options: [
            "Anti-A is detected using group O cells",
            "Anti-D reacts with most group O cells",
            "Weak subgroups of A react with group O cells",
            "ABO antibodies do not react with group O cells"
          ]
        },
        {
          numb: 37,
          question: "The use of EDTA samples for the direct antiglobulin test prevents activation of the classical complement pathway by:",
          answer: "Chelating Ca2+ ions, preventing assembly of C1",
          options: [
            "Causing rapid decay of complement proteins",
            "Chelating Mg2+ ions, preventing assembly of C6",
            "Chelating Ca2+ ions, preventing assembly of C1",
            "Preventing chemotaxis"
          ]
        },
        {
          numb: 38,
          question: "Check (Coombs control) cells are:",
          answer: "Added to every negative antiglobulin test",
          options: [
            "Added to every negative antiglobulin test",
            "Added to negative direct antiglobulin tests only",
            "Used to confirm a positive Coombs’ reaction",
            "Coated with both IgM and C3d"
          ]
        },
        {
          numb: 39,
          question: "What type(s) of red cells is(are) acceptable to transfuse to an AB-negative patient?",
          answer: "A negative, B negative, AB negative, O negative",
          options: [
            "A negative, B negative, AB negative, O negative",
            "O negative only",
            "AB negative only",
            "AB negative, A negative, B negative only"
          ]
        },
        {
          numb: 40,
          question: "A nonbleeding adult of average height and weight with chronic anemia is transfused with 2 units of red blood cells. The pretransfusion Hgb is 7.0 g/dL. What is the expected posttransfusion Hgb?",
          answer: "9 g/dL",
          options: [
            "8 g/dL",
            "9 g/dL",
            "10 g/dL",
            "11 g/dL"
          ]
        },
        {
          numb: 41,
          question: "An IgA-deficient patient with clinically significant anti-IgA requires which of the following?",
          answer: "Washed RBCs",
          options: [
            "Leukocyte-reduced fresh frozen plasma",
            "CMV-seronegative RBCs",
            "Irradiated RBCs and platelets",
            "Washed RBCs"
          ]
        },

        
//
      

  {
    numb: 42,
    question: "Anti-H will react weakest with blood from a person with _____________.",
    answer: "Group A1",
    options: [
      "Group O",
      "Group A1",
      "Group A2",
      "Group A2B"
    ]
  },
  {
    numb: 43,
    question: "Which of the following antibodies do not match the others in terms of optimal reactive temperature?",
    answer: "Anti-M",
    options: [
      "Anti-Fya",
      "Anti-M",
      "Anti-K",
      "Anti-S"
    ]
  },
  {
    numb: 44,
    question: "What antibody can an R1r patient make if transfused with R2R2 blood?",
    answer: "Anti-E",
    options: [
      "Anti-D",
      "Anti-C",
      "Anti-E",
      "Anti-c",
      "Anti-e"
    ]
  },
  {
    numb: 45,
    question: "What is the probability of finding blood negative for the Jka and Fya antigens (23% of population is Jk [a— ] and 34% of population is Fy[a— ])?",
    answer: "7.8%",
    options: [
      "5.1%",
      "51%",
      "7.8%",
      "78%"
    ]
  },
  {
    numb: 46,
    question: "If the following patient’s RBCs were tested against anti-H lectin and did not react, this person would be identified as a(an):",
    answer: "Oh phenotype",
    options: [
      "Acquired B",
      "Secretor",
      "Oh phenotype",
      "Subgroup of A"
    ]
  },
  {
    numb: 47,
    question: "If a person has the genetic makeup Hh, AO, LeLe, sese, what substance will be found in the secretions?",
    answer: "Lea substance",
    options: [
      "A substance",
      "H Substance",
      "Lea substance",
      "Leb substance"
    ]
  },
  {
    numb: 48,
    question: "Before A and B antigens can be expressed, the precursor substance must have the terminal sugar _______________.",
    answer: "L-Fucose",
    options: [
      "d-Galactose",
      "N-Acetylgalactosamine",
      "Glucose",
      "L-Fucose"
    ]
  },
  {
    numb: 49,
    question: "A white female’s RBCs gave the following reactions D+,C+,E+,c+,e+. The most probable genotype is:",
    answer: "DCe/dce",
    options: [
      "DCe/Dce",
      "DCe/dce",
      "DCe/DcE",
      "Dce/dCe"
    ]
  },
  {
    numb: 50,
    question: "If a D-positive person makes anti-D, this person is most likely:",
    answer: "Partial D",
    options: [
      "Partial D",
      "D negative",
      "Weak D as position effect",
      "Weak D because of transmissible genes"
    ]
  },
  {
    numb: 51,
    question: "A serum containing anti-k is not frequently encountered because of which of the following?",
    answer: "People who lack the k antigen are rare",
    options: [
      "People who lack the k antigen are rare",
      "People who possess the k antigen are rare",
      "The k antigen is not a good immunogen",
      "Kell-null people are rare"
    ]
  },
  {
    numb: 52,
    question: "A characteristic of the Xga antigen is that the Xga antigen:",
    answer: "Has a higher frequency in women than in men",
    options: [
      "Has a higher frequency in women than in men",
      "Has a higher frequency in men than in women",
      "Is enhanced by enzymes",
      "Is usually a saline reacting antibody"
    ]
  },
  {
    numb: 53,
    question: "Which of the following is a characteristic of the Kidd system antibodies?",
    answer: "The antibodies are often implicated in delayed hemolytic transfusion reaction",
    options: [
      "The antibodies are usually IgM",
      "The corresponding antigens are destroyed by enzymes",
      "The antibodies are usually strong and stable during storage",
      "The antibodies are often implicated in delayed hemolytic transfusion reaction"
    ]
  },
  {
    numb: 54,
    question: "Anti-E will react with which of the following cells?",
    answer: "R2R2",
    options: [
      "RoRo",
      "R1R1",
      "R2R2",
      "rr"
    ]
  },
  {
    numb: 55,
    question: "Which statement is not true concerning anti-Fya and anti-Fyb?",
    answer: "React well with enzyme-treated panel cells",
    options: [
      "Are clinically significant",
      "React well with enzyme-treated panel cells",
      "Cause hemolytic transfusion reactions",
      "Cause a generally mild hemolytic disease of the newborn"
    ]
  },


  //

  
    {
      numb: 56,
      question: "Which of the following antibodies can be neutralized with pooled human plasma?",
      answer: "Anti-Cha and anti-Rga",
      options: [
        "Anti-Hy and anti-Ge:1",
        "Anti-Cha and anti-Rga",
        "Anti-Coa and anti-Cob",
        "Anti-Doa and anti-Jsb"
      ]
    },
    {
      numb: 57,
      question: "Donors who have received RBC transfusion within the last 12 months are deferred because:",
      answer: "Blood could transmit hepatitis or HIV",
      options: [
        "Blood could transmit hepatitis or HIV",
        "Donor red cell hemoglobin level may be too low",
        "Donor health would prohibit the donation process",
        "There will be two cell populations in this donor"
      ]
    },
    {
      numb: 58,
      question: "Autologous presurgical donations are not allowed for which of the following patients?",
      answer: "With bacteremia",
      options: [
        "Weigh less than 100 lb",
        "Under the age of 14",
        "With hemoglobin of 13 g/dL",
        "With bacteremia"
      ]
    },
    {
      numb: 59,
      question: "Which of the following viruses resides exclusively in leukocytes?",
      answer: "CMV",
      options: [
        "HCV",
        "HBV",
        "CMV",
        "HIV"
      ]
    },
    {
      numb: 60,
      question: "Which product is least likely to transmit hepatitis?",
      answer: "Plasma protein fraction",
      options: [
        "Cryoprecipitate",
        "Plasma protein fraction",
        "RBC",
        "Platelets"
      ]
    },
    {
      numb: 61,
      question: "In preparing platelets from a unit of whole blood, the correct order of centrifugation is:",
      answer: "Light spin followed by a hard spin",
      options: [
        "Hard spin followed by a hard spin",
        "Light spin followed by a light spin",
        "Light spin followed by a hard spin",
        "Hard spin followed by a light spin"
      ]
    },
    {
      numb: 62,
      question: "Which antibody could cause hemolytic disease of the fetus and newborn?",
      answer: "Anti-K",
      options: [
        "Anti-I",
        "Anti-K",
        "Anti-Lea",
        "Anti-N"
      ]
    },
    {
      numb: 63,
      question: "A group A, D-negative obstetric patient with anti-D (titer 256) is carrying a fetus who needs an intrauterine transfusion. The blood needed should be:",
      answer: "Group O, D-negative RBC",
      options: [
        "Group A, D-negative RBC",
        "Group A, D-negative whole blood",
        "Group O, D-negative RBC",
        "Group O, D-negative whole blood"
      ]
    },
    {
      numb: 64,
      question: "Which of the following mothers should receive RhIG?",
      answer: "O-negative mother; A-positive baby; no anti-D in mother",
      options: [
        "A-negative mother; O-negative baby; no prenatal care, anti-D in mother",
        "AB-negative mother; B-positive baby; anti-D in mother",
        "O-negative mother; A-positive baby; no anti-D in mother",
        "A-positive mother; A-positive baby; no anti-D in mother"
      ]
    },
    {
      numb: 65,
      question: "How many doses of RhIG are indicated for a Kleihauer-Betke reading of 0.6%?",
      answer: "2",
      options: [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    {
      numb: 66,
      question: "What should be done first if a mother types as O and the baby types as AB?",
      answer: "Recheck all labels, get new samples, if necessary, and retest",
      options: [
        "Report the results with no further testing",
        "Try to get a sample from the father",
        "Recheck all labels, get new samples, if necessary, and retest",
        "Retype using all new reagents"
      ]
    },
    {
      numb: 67,
      question: "A newborn has a positive DAT. What is the best procedure to determine the antibody causing a positive DAT in this newborn?",
      answer: "An antibody panel on the mother’s serum",
      options: [
        "An antibody titer on the mother’s serum",
        "An antibody panel on the mother’s serum",
        "An antibody panel performed on the eluate of the mother’s cells",
        "An antibody panel performed on the eluate of the baby’s cells"
      ]
    },
    {
      numb: 68,
      question: "Which of the following is(are) an example(s) of a record-keeping error?",
      answer: "All of the above",
      options: [
        "Use of correction fluid or tape",
        "Using pencil",
        "Documentation after the fact",
        "All of the above"
      ]
    },
    {
      numb: 69,
      question: "Which of the antigens below is considered low incidence?",
      answer: "Kpa",
      options: [
        "Fya",
        "S",
        "C",
        "Kpa"
      ]
    },
    {
      numb: 70,
      question: "Which of the antigens below is considered high incidence?",
      answer: "Vel",
      options: [
        "Fyb",
        "Vel",
        "E",
        "S"
      ]
    },
  
  
//


  {
    numb: 71,
    question: "In performing tube testing, you see many medium-sized agglutinates in a clear background. How would you grade this reaction?",
    answer: "2+",
    options: [
      "2+",
      "1+",
      "4+",
      "3+"
    ]
  },
  {
    numb: 72,
    question: "Of the following, which genotypes would result in the B phenotype?",
    answer: "a and c",
    options: [
      "BB",
      "AB",
      "BO",
      "a and b",
      "a and c"
    ]
  },
  {
    numb: 73,
    question: "How would you interpret the following reactions? \nForward Type: Anti-A 0, Anti-B 0 \nReverse Type: A Cells 4+, B Cells 4+",
    answer: "Blood type O",
    options: [
      "Blood type A",
      "Blood type O",
      "Blood type B",
      "Blood type AB"
    ]
  },
  {
    numb: 74,
    question: "Noting these reactions, if the patient needed blood now, what type of blood should be transfused? \nForward Type: Anti-A 4+, Anti-B 0 \nReverse Type: A Cells 1+, B Cells 4+",
    answer: "Blood type O",
    options: [
      "Blood type A",
      "Blood type O",
      "Blood type A2",
      "Blood type A"
    ]
  },
  {
    numb: 75,
    question: "Blood group antibodies made by type A and type B people are predominantly which class?",
    answer: "IgM",
    options: [
      "IgE",
      "IgA",
      "IgG",
      "IgM"
    ]
  },
  {
    numb: 76,
    question: "Based on these reactions, what should be the next step? \nForward Type: Anti-A 4+, Anti-B 0 \nReverse Type: A Cells 1+, B Cells 4+",
    answer: "Both a and c",
    options: [
      "Test the serum with A2 cells",
      "Report the patient as type A",
      "Test the cells with anti-A1 lectin",
      "Both a and c",
      "Request a new specimen"
    ]
  },
  {
    numb: 77,
    question: "A 'directed donor' unit of blood is defined as a unit of blood from a person who gives blood for:",
    answer: "Another person he or she has specified",
    options: [
      "Relief of polycythemia or other blood disorder",
      "His or her specific use only",
      "First-degree blood relative",
      "Another person he or she has specified"
    ]
  },
  {
    numb: 78,
    question: "Before the patient can receive a directed donation unit, the patient requires which of the following tests to be completed?",
    answer: "Type and screen and compatibility testing",
    options: [
      "Type and screen only",
      "Type and screen and compatibility testing",
      "Retype of patient and donor unit",
      "No additional testing is required"
    ]
  },
  {
    numb: 79,
    question: "An 18-year-old female with a hematocrit of 38%, temperature of 37 C, and blood pressure of 175/90 mm Hg presents for whole blood donation. Based on this information, would you accept, permanently defer (PD), or temporarily defer (TD) the donor?",
    answer: "Accept",
    options: [
      "Accept",
      "TD, blood pressure is too high for a person of her age",
      "TD, temperature is too high",
      "PD, for all values listed"
    ]
  },
  {
    numb: 80,
    question: "A 63-year-old man with a hemoglobin value of 130 g/dL and pulse of 80 beats/min, who received human pituitary growth hormone (PGH) when he was 10 years old, presents for whole blood donation. Based on this information, would you accept, permanently defer (PD,) or temporarily defer (TD) the donor?",
    answer: "PD, because of the human PGH",
    options: [
      "Accept the donor",
      "TD, because of the human PGH",
      "PD, because of the human PGH",
      "PD, because of the high hemoglobin value"
    ]
  },
  {
    numb: 81,
    question: "A 38-year-old female weighing 153 lb, who received the rubella vaccine 2 months previously, presents to donate whole blood. She also received 2 units of packed cells after the delivery of her eighth child 8 weeks ago. Based on this information, would you accept, permanently defer (PD), or temporarily defer (TD) the donor?",
    answer: "TD because of the packed cells 8 weeks ago",
    options: [
      "Accept the donor",
      "TD because of the packed cells 8 weeks ago",
      "PD because of receiving blood products",
      "TD because of the rubella vaccine"
    ]
  },

  //


    {
      numb: 82,
      question: "A 22-year-old female with a cousin with AIDS who had taken aspirin the day before and with needle marks on both arms presents to donate whole blood. Based on this information, would you accept, permanently defer (PD), or temporarily defer (TD) the donor?",
      answer: "PD, needle marks on both arms",
      options: [
        "PD, needle marks on both arms",
        "TD, needle marks on both arms",
        "PD, cousin with AIDS",
        "TD, because of the aspirin"
      ]
    },
    {
      numb: 83,
      question: "Each unit of blood must be tested for all of the following except:",
      answer: "Antigen to HCV",
      options: [
        "Anti-HIV 1/2",
        "HBsAg",
        "Anti-HCV",
        "Antigen to HCV"
      ]
    },
    {
      numb: 84,
      question: "The principle of the HBsAg test is to detect which of the following?",
      answer: "Antigen in patient’s plasma",
      options: [
        "Antigen in patient’s plasma",
        "Antigen on the patient’s RBCs",
        "Antibody in patient’s serum",
        "Antigen and antibody in patient’s serum"
      ]
    },
    {
      numb: 85,
      question: "Cryoprecipitate is prepared by first thawing:",
      answer: "Fresh frozen plasma at 1 to 6 C, and then doing a cold centrifugation to pack the cryoprecipitate to the bottom so the plasma may be removed",
      options: [
        "Fresh frozen plasma at 1 to 6 C, and then doing a cold centrifugation to pack the cryoprecipitate to the bottom so the plasma may be removed",
        "Fresh frozen plasma at room temperature, then placing in the freezer for 2 hours, then centrifuging and removing the cryoprecipitate",
        "Cryoprecipitate at 1 to 6 C, then pooling the thawed cryoprecipitate in batches of 10 units, then quickly refreezing",
        "Cryoprecipitate at room temperature, then centrifugation in the cold to concentrate the cryoprecipitate to the bottom before adding more plasma to reconstitute"
      ]
    },
    {
      numb: 86,
      question: "Platelets must be kept in constant motion for which of the following reasons?",
      answer: "Maintain the pH so the platelets will be alive before transfusion",
      options: [
        "Maintain the pH so the platelets will be alive before transfusion",
        "Keep the platelets in suspension and prevent clumping of the platelets",
        "Mimic what is going on in the blood vessels",
        "Preserve the coagulation factors and platelet viability"
      ]
    },
    {
      numb: 87,
      question: "After thawing and pooling cryoprecipitate for transfusion to a patient, the product should be stored at:",
      answer: "Room temperature",
      options: [
        "Room temperature",
        "1 to 6 C",
        "37 C",
        "0 C"
      ]
    },
    {
      numb: 88,
      question: "Fresh frozen plasma must be thawed at which temperature?",
      answer: "37 C",
      options: [
        "1 to 6 C",
        "Room temperature",
        "37 C",
        "40 C or higher"
      ]
    },
    {
      numb: 89,
      question: "Frozen red blood cells are prepared for transfusion by thawing at:",
      answer: "37 C in a water bath and then washing with different concentrations of saline",
      options: [
        "Room temperature and then washing with saline",
        "37 C in a water bath and then washing with different concentrations of saline",
        "37 C control incubator and then mixing well before transfusion",
        "1 to 6 C for 2 days and then washing with different concentrations of dextrose"
      ]
    },
    {
      numb: 90,
      question: "Which is the most likely reason frozen deglycerolized red blood cells would be used?",
      answer: "A patient with antibodies to a high-frequency antigen",
      options: [
        "A patient with antibodies to a high-frequency antigen",
        "Pregnant women requiring intrauterine transfusions",
        "Emergency transfusion situations",
        "Group AB Rh-negative patients"
      ]
    },
    {
      numb: 91,
      question: "One indication for transfusion of thawed/pooled cryoprecipitate would be replacement of which of the following?",
      answer: "Fibrinogen",
      options: [
        "Factor X in hemophiliacs",
        "Factor VIII in massively transfused patients",
        "Fibrinogen",
        "Volume"
      ]
    },
    {
      numb: 92,
      question: "A contraindication for transfusing red blood cells to a patient is if the patient:",
      answer: "Has well-compensated anemia",
      options: [
        "Is massively bleeding",
        "Has well-compensated anemia",
        "Has bone marrow failure",
        "Has decreased red blood cell survival"
      ]
    },
    {
      numb: 93,
      question: "Concerning the component and the required quality control results, which of the following is a true statement?",
      answer: "Cryoprecipitate must have 80 international units of factor VIII",
      options: [
        "FFP must have 80 international units of fibrinogen in 7 units tested",
        "Cryoprecipitate must have 80 international units of factor VIII",
        "Leukocyte-reduced red blood cells must have fewer than 3.3 x 10^11 WBCs in each unit",
        "Platelets must have no red blood cells"
      ]
    },
    {
      numb: 94,
      question: "Fresh frozen plasma must be stored at:",
      answer: "Colder than -18 C for no longer than 1 year from donation",
      options: [
        "Colder than -18 C for no longer than 1 year from donation",
        "Colder than -38 C for no longer than 1 year from donation",
        "Exactly -18 C for no longer than 1 year from donation",
        "-18C to-38C for up to 10 years from donation"
      ]
    },


      {
        numb: 95,
        question: "The storage temperature for packed red blood cells is _______________.",
        answer: "1 to 6 C",
        options: [
          "1 to 10 C",
          "1 to 4C",
          "1 to 6 C",
          "20 to 25 F"
        ]
      },
      {
        numb: 96,
        question: "Platelets made from a single whole blood donation should contain which of the following?",
        answer: "5.5x10^10 platelets in 90% of samples",
        options: [
          "3x10^11 platelets in 90% of samples",
          "3.3x10^9 platelets in 75% of samples",
          "5.5x10^10 platelets in 90% of samples",
          "10x10^10 platelets in 75% of samples"
        ]
      },
      {
        numb: 97,
        question: "Frozen red blood cells must be stored at __________________.",
        answer: "65 C or less",
        options: [
          "180 C or less",
          "18 C or less",
          "32 C or less",
          "65 C or less"
        ]
      },
      {
        numb: 98,
        question: "The temperature for incubation of the indirect anti-globulin test (IAT) should be ____________.",
        answer: "37 C",
        options: [
          "24 C",
          "6 C",
          "37 C",
          "37 ± 1.0 C"
        ]
      },
      {
        numb: 99,
        question: "The temperature of a blood refrigerator without a continuous recording device should be recorded:",
        answer: "Every 4 hours",
        options: [
          "Daily",
          "Every 4 hours",
          "Once every 24 hours",
          "Every 30 minutes"
        ]
      },
      {
        numb: 100,
        question: "When should quality control be performed on routine blood typing reagents?",
        answer: "Once daily",
        options: [
          "At the beginning of each shift",
          "Once daily",
          "Weekly",
          "Only when opening a new vial"
        ]
      }
    
    
  
  



  
    
  
];
