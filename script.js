const projects = {
  toxicity: {
    title: "Prediction of Oxidative Stress–Mediated Toxicity with Pathway-Level Explainability",
    institution: "Self",
    tools: "Python · Cheminformatics · Transcriptomics · Explainable ML",
    bullets: [
      "Developing a mechanism-aware ML framework integrating chemical structure and transcriptomic features to predict compound-induced oxidative stress and identify compounds with potential to exacerbate oxidative burden.",
      "Applying cheminformatics with RDKit for molecular standardization, physicochemical descriptor and fingerprint generation, structural feature analysis, and identification of redox-reactive chemical motifs associated with oxidative stress.",
      "Integrating compound-induced transcriptomic signatures with ROS pathways, NRF2/redox-response programs, and gene modules, using pathway enrichment and SHAP-based explainability to connect predictive features with underlying biological mechanisms.",
      "Developing an Agentic AI–assisted analysis framework that orchestrates chemical, transcriptomic, pathway, and literature-level evidence to generate interpretable compound → structural motif → gene module → ROS pathway maps, including a case study comparing compound-induced signatures with β-thalassemia transcriptomes."
    ],
    skills: "Cheminformatics · Computational Toxicology · Explainable AI · Transcriptomics · Pathway & Gene-Set Analysis · Molecular Representation Learning · Mechanism-Aware Modeling · Agentic AI"
  },
  pathogen: {
    title: "Infectious Pathogen Analysis Platform",
    institution: "Dhiti Omics Technologies Pvt. Ltd.",
    tools: "Nextflow · Shell Scripting · Kraken2 · Porechop · BLAST · Linux",
    bullets: [
      "Handled infectious-disease sequencing cases as the primary bioinformatics analyst, performing end-to-end pathogen analysis and interpretation within a clinically reviewed workflow, while identifying the manual bottlenecks and reproducibility challenges that limited turnaround time.",
      "Engineered and rigorously validated an automated Nextflow/shell-based metagenomics pipeline, integrating tools including Kraken2, Porechop and BLAST with case-specific modifications and automated database workflows. This reduced analysis time from ~12 hours to ~2 hours and transformed a coding-heavy workflow into a tool accessible to non-programmers.",
      "Developed the analytical framework for pathogen identification and ranking, incorporating BLAST-based verification, multi-alignment analysis and AI-assisted pathogen classification to strengthen species-level interpretation. The resulting system was presented at London Calling, demonstrating the transition from manual clinical analysis to a reproducible, deployable infectious-disease analytics platform."
    ],
    skills: "Bioinformatics Pipeline Development · Clinical Genomic Analysis · Metagenomic Analysis · Workflow Automation · Statistical/Analytical Validation · Pathogen Identification · Clinical Data Interpretation"
  },
  variant: {
    title: "Designing a Intelligent Variant Interpretation Pipeline",
    institution: "Dhiti Omics Technologies Pvt. Ltd.",
    tools: "Python · Illumina NGS Data · Large Language Models · ACMG Guidelines · Variant Annotation Tools",
    bullets: [
      "Built and benchmark-tested an end-to-end variant interpretation pipeline for Illumina sequencing data, automating variant processing and ACMG-based pathogenicity classification to reduce the manual effort involved in clinical variant triage.",
      "Explored LLM-driven phenotype-to-gene prioritisation, using patient clinical histories to identify relevant genes-of-interest (GOIs) and provide an additional clinical context layer beyond conventional variant-level annotation.",
      "Integrated genomic evidence with AI-assisted clinical reasoning, developing experience in precision medicine, variant prioritisation, ACMG interpretation, clinical data mining and LLM-based literature/phenotype analysis."
    ],
    skills: "Clinical Variant Interpretation · ACMG Pathogenicity Classification · Variant Prioritisation · Phenotype-to-Gene Mapping · Clinical Data Mining · LLM-Assisted Literature Mining · AI for Precision Medicine · Pipeline Development · Model Benchmarking"
  },
  endonet: {
    title: "EndoNet: Computationally Efficient AI for Capsule Endoscopy",
    institution: "Queen Mary University of London",
    tools: "PyTorch · Augmentor · NVIDIA CUDA/GPU Computing · Adam Optimizer · Cross-Entropy Loss",
    bullets: [
      "Designed and trained a lightweight 3-layer CNN for 14-class gastrointestinal image classification, specifically adapting the architecture to the challenges of capsule endoscopy data through LeakyReLU activations, dropout and a combination of max/average pooling, while keeping computational requirements low.",
      "Solved severe class imbalance in 47K+ capsule endoscopy images through targeted down-sampling, class-specific augmentation and weighted sampling, increasing representation of minority disease classes while accounting for the blurry, tilted frames produced by video-based capsule imaging.",
      "Achieved 90.65% test accuracy and 0.9205 F1-score, with particularly strong performance across several pathological classes, while training at approximately 2.5 minutes per epoch on an NVIDIA RTX 4050—demonstrating a computationally efficient alternative to substantially heavier deep-learning architectures."
    ],
    skills: "Medical Computer Vision · Deep Learning · CNN Architecture Design · Imbalanced Data Modelling · Image Augmentation · Model Evaluation · Medical Image Classification · Computationally Efficient Model Design · Exploratory Data Analysis"
  },
  metabolomics: {
    title: "Metabolic Signatures of Crohn’s Disease: An ML-Based Biomarker Study",
    institution: "Queen Mary University of London",
    tools: "R · Bioconductor · GC-MS Data Analysis · Statistical/Machine Learning Libraries · Data Preprocessing & Feature Selection",
    bullets: [
      "Integrated and analysed GC-MS metabolomic profiles from multiple biological sample types — blood, fecal, breath and urine — using R-based statistical and machine-learning workflows to investigate metabolic signatures associated with Crohn’s disease.",
      "Applied feature selection, statistical analysis and machine-learning classification to identify discriminative metabolites and evaluate whether metabolic profiles could separate Crohn’s disease from control samples, linking high-dimensional metabolomic patterns to potential biomarkers.",
      "Built experience in translating complex metabolomic measurements into clinically relevant predictions, combining machine learning, statistical validation and biological interpretation to investigate the potential of metabolomics as a non-invasive diagnostic strategy for Crohn’s disease."
    ],
    skills: "Metabolomics · Biomarker Discovery · Machine Learning · Statistical Modelling · Feature Selection · Multivariate Analysis · Biological Data Interpretation · Clinical Classification · High-Dimensional Data Analysis"
  },
  speech: {
    title: "Comparing Speech Recognition Modules for the Identification of Medicine Names",
    institution: "Queen Mary University of London",
    tools: "OpenAI Whisper · Hugging Face · LLaMA-3 70B · QLoRA · Tortoise TTS · Flask · Python · WER/CER/PER Evaluation",
    bullets: [
      "Contributed to a team project developing a Whisper-based speech recognition system for accurate medication name identification across diverse UK accents, combining public dialect datasets with 100 AI-generated medicine-name audio samples to improve model robustness.",
      "Evaluated and compared three ASR pipelines — Whisper Medium, Whisper + LLaMA-3 70B, and QLoRA fine-tuned Whisper — using WER, CER and PER metrics, and contributed to model fine-tuning and optimization over 4,000 training steps.",
      "Reduced noisy-condition WHelped demonstrate improved recognition of complex medication names, accented speech and noisy environments, reducing noisy-condition WER from ~1.5 to ~1.3, and supported deployment through a Flask-based application for real-time transcription."
    ],
    skills: "Speech Recognition · Natural Language Processing · ASR Model Fine-tuning · Synthetic Data Generation · Model Evaluation · Healthcare AI · AI-Assisted Language Processing"
  },
  imputation: {
    title: "Exploring Imputation Techniques for Gene Expression Data",
    institution: "Queen Mary University of London",
    tools: "R · Bioconductor · KNN · PCA · BPCA · Expectation-Maximization (EM) · SVD · EM-AMMI · MissForest · DESeq2",
    bullets: [
      "Investigated missing-data recovery in RNA-seq gene expression data, working with 39 mouse samples and 32,040 genes across datasets containing 5%, 10% and 30% missing values, and statistically characterised the missingness using Little’s MCAR test.",
      "Implemented and compared 8 statistical, probabilistic and machine-learning imputation methods in R, including KNN, PCA, BPCA, EM, SVD, EM-AMMI and MissForest, evaluating both data-distribution preservation and downstream differential gene expression using PCA, adjusted pvalues and recovery of known differentially expressed genes.",
      "Demonstrated that simpler methods could outperform computationally complex approaches: KNN performed strongly at 5–10% missingness, while Median imputation was most robust at 30%, preserving more biologically relevant signal despite substantial data loss; the study also quantified major computational trade-offs, from <1 minute for KNN to ~12 hours for MissForest."
    ],
    skills: "Statistical Analysis · Missing Data Analysis · Gene Expression Analysis · Statistical Modelling · Machine Learning · Imputation · Differential Expression Analysis · Multivariate Data Analysis"
  },
  plant: {
    title: "Transfer Learning for Image-Based Plant Disease Classification",
    institution: "Indian Institute of Sceince",
    tools: "PyTorch · Flutter · AWS · PlantVillage Dataset",
    bullets: [
      "Collaborated on the design and training of convolutional neural networks using transfer learning to classify plant diseases from leaf images in the PlantVillage dataset, establishing my foundation in applied computer vision and deep learning.",
      "Independently took the trained model beyond experimentation and into deployment, integrating the prediction pipeline into a Flutter-based mobile application designed to provide accessible, real-time plant disease classification.",
      "Built the supporting cloud infrastructure on AWS, gaining hands-on experience across the complete AI development lifecycle — from data and model development to mobile integration, cloud deployment and user-facing application delivery."
    ],
    skills: "Deep Learning · CNN Architecture · Transfer Learning · Computer Vision · Image Classification · Model Deployment · Mobile AI · Cloud Deployment · End-to-End AI Product Development"
  },
  botanical: {
    title: "Computer Vision for Plant Morphology & Identification",
    institution: "Queen Mary University of London",
    tools: "R · TensorFlow · CNNs · Image Processing",
    bullets: [
      "Collaborated with a team at the Royal Botanic Gardens, Kew to collect and process real-world plant imagery, developing an image-processing workflow to prepare botanical samples for machine-learning analysis.",
      "Developed and trained a convolutional neural network for automated plant-part identification, applying image preprocessing and deep-learning techniques to distinguish botanical structures from complex visual data.",
      "Built experience translating biological imagery into machine-readable features, developing skills in computer vision, image-processing pipelines, deep learning and biological data analysis for applications in automated botanical research."
    ],
    skills: "Computer Vision · Deep Learning · Image Classification · Image Preprocessing · Feature Extraction · Biological Image Analysis · Machine Learning Model Development · Data Preparation"
  }
};

const experiences = [
  {
    date: "JAN 2025 — DEC 2025",
    title: "Bioinformatician & AI Engineer · Dhiti Omics Technologies",
    text: "Re-engineered a manual infectious-pathogen analysis workflow that could take ~12 hours per case into an automated Nextflow/shell-based pipeline completing analysis in ~2 hours, progressively eliminating 4–5 hours of manual processing in the initial automation stage and ultimately saving ~7–8 hours in critical/ICU analyses through automated QC, classification, database retrieval and BLAST-based verification. Integrated Kraken2, Porechop, BLAST and AI-assisted pathogen ranking, with case-specific modifications and curated biological databases, creating a clinically usable workflow accessible to non-programmers. Served as the primary bioinformatics analyst for infectious-disease sequencing cases, independently analysing Nanopore and Illumina NGS data across metagenomic, amplicon and trio workflows, while performing QC, alignment, variant calling, structural variant and CNV analysis, annotation and clinical interpretation. Used real clinical cases to identify workflow bottlenecks and iteratively validate each automation stage before incorporating it into the production workflow. Developed AI-assisted clinical variant interpretation capabilities, combining automated ACMG-based pathogenicity classification with LLM-driven phenotype-to-gene prioritisation to help reduce large variant sets to clinically relevant candidates. Built and maintained 7+ curated, target-specific biological databases supporting genomic analysis and predictive-health workflows, while contributing to the development of FUVIBACT, subsequently presented at London Calling 2025."
  },
  {
    date: "MAY 2022 — NOV 2022",
    title: "Developer & Data Analyst Intern · CCAMP, BLiSC",
    text: "Worked at the intersection of microfluidics, cell sorting and data analytics, learning the experimental workflow behind a microfluidic cell-sorting device and translating raw experimental measurements into interpretable analytical outputs for device development. Developed a web-based visualisation and analysis platform for fluorescence time-series data, replacing repetitive manual analysis with an interactive workflow that enabled faster comparison of experimental runs and supported interpretation of multiple device observations. Bridged experimental biology and computational analysis, moving from understanding microfluidic cell-sorting and fluorescence measurement principles to applying statistical signal processing and software-based visualisation to identify performance patterns, anomalies and optimisation opportunities."  
  }
];


document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.getElementById("contentDrawer");
  const drawerContent = document.getElementById("drawerContent");
  const drawerTitle = document.getElementById("drawerTitle");
  const drawerEyebrow = document.getElementById("drawerEyebrow");
  const navigationZone = document.getElementById("navigationZone");
  const closeDrawer = document.getElementById("closeDrawer");

  // Fail gracefully if this script is accidentally used on another page.
  if (!drawer || !drawerContent || !drawerTitle || !drawerEyebrow || !navigationZone) {
    console.error("Portfolio UI: required HTML elements were not found.");
    return;
  }

  const tabs = document.querySelectorAll(".section-tab");
  const nodes = document.querySelectorAll(".dna-node");

  function setActiveTab(section) {
    tabs.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.section === section);
    });
  }

  function clearSelectedNode() {
    nodes.forEach(node => node.classList.remove("active"));
  }

  function scrollToDrawer() {
    requestAnimationFrame(() => {
      drawer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function openDrawer(section) {
    setActiveTab(section);

    const isProjects = section === "projects";
    navigationZone.classList.toggle("projects-active", isProjects);

    if (!isProjects) {
      clearSelectedNode();
    }

    drawer.classList.add("open");

    if (section === "projects") {
      clearSelectedNode();

      const firstNode = document.querySelector('.dna-node[data-project="toxicity"]');
      if (firstNode) {
        firstNode.classList.add("active");
      }

      drawerEyebrow.textContent = "PROJECTS / SELECTED WORK";
      drawerTitle.textContent = "Choose Project Node to View Details";
      drawerContent.innerHTML = `
        <div class="project-prompt">
          <div class="prompt-mark">00</div>
          <div>
            <h3>Click on the green nodes above to explore the specific project.</h3>
            <p>
              Choose any node on the ladder to reveal its details.
            </p>
          </div>
        </div>
      `;
    }

    if (section === "experience") {
      drawerEyebrow.textContent = "EXPERIENCE / PROFESSIONAL WORK";
      drawerTitle.textContent = "Professional Experience";

      drawerContent.innerHTML = `
        <div class="experience-list">
          ${experiences.map(e => `
            <article class="experience-item">
              <div class="date">${e.date}</div>
              <h3>${e.title}</h3>
              <p>${e.text}</p>
            </article>
          `).join("")}
        </div>
      `;
    }

    if (section === "research") {
      drawerEyebrow.textContent = "RESEARCH / PUBLICATION";
      drawerTitle.textContent = "Research Output";

      drawerContent.innerHTML = `
        <article class="research-item">
          <div class="date">
            LONDON CALLING 2025 · OXFORD NANOPORE TECHNOLOGIES
          </div>
          <h3>
            FUVIBACT: A Novel, Rapid, Sensitive, and Accurate Tool for Infectious Disease Diagnostics
          </h3>
          <p>
            Conference poster associated with the infectious pathogen analysis platform,
            presenting the development of an automated approach for infectious-disease
            sequencing analysis and pathogen identification.
          </p>
          <div class="research-poster">
            <img
              src="assets/poster.png"
              alt="FUVIBACT conference poster"
             >
          </div>
        </article>
      `;
    }

    if (section === "other") {
      drawerEyebrow.textContent = "OTHER WORK / CONTINUING DEVELOPMENT";
      drawerTitle.textContent = "Courses and Workshops";

      drawerContent.innerHTML = `
        <div class="other-work-grid">
          <article class="project-item">
            <div class="project-number">01</div>
            <h3>Courses</h3>
            <p>
              Systems Biology and Biotechnology Specialization
              <span class="course-school">Icahn School of Medicine at Mount Sinai</span>
            </p>
            <p>
              Drug Hunting: The Science of Making New Medicines Specialization
              <span class="course-school">Novartis</span>
            </p>
            <p>
              Building AI Agents and Agentic Workflows Specialization
              <span class="course-school">IBM</span>
            </p>
          </article>

          <article class="project-item"> 
            <div class="project-number">02</div> 
            <h3>Conferences and Workshops</h3> 
            <p class="certificate-hover">
              FDP Workshop in AI and ML in Biomedical Applications
              <span class="course-school">NIT Warangal</span>
              <span class="certificate-preview">
              <img src="assets/FDP_Program_Certificate.jpeg" alt="FDP Biological Applications Certificate">
              </span>
            </p> 

            <p class="certificate-hover">
              REDRESS Conference Presentation 2024
              <span class="course-school">TIGS</span>
              <span class="certificate-preview">
              <img src="assets/REDRESS_CONFERENCE_POSTER.png" alt="REDRESS Conference Presentation 2024 Certificate">
              </span>
            </p> 
          </article>
        </div>
      `;
    }

    scrollToDrawer();
  }

  function openCertificate() {
    document.getElementById("certificateModal").classList.add("active");
  }

  function closeCertificate() {
    document.getElementById("certificateModal").classList.remove("active");
  }

  function openProject(key) {
    const project = projects[key];

    // Prevent one bad/missing data-project value from breaking every node.
    if (!project) {
      console.error(`Portfolio UI: project "${key}" was not found.`);
      return;
    }

    clearSelectedNode();

    const selectedNode = document.querySelector(
      `.dna-node[data-project="${CSS.escape(key)}"]`
    );

    if (selectedNode) {
      selectedNode.classList.add("active");
    }

    drawerEyebrow.textContent = "PROJECT / SELECTED WORK";
    drawerTitle.textContent = project.title;

    drawerContent.innerHTML = `
      <article class="project-item selected-project">
        <div class="project-number">SELECTED PROJECT</div>
        <h3>${project.title}</h3>
        <div class="project-institution">${project.institution}</div>
        <div class="project-tools">${project.tools}</div>
        <ul>
          ${project.bullets.map(bullet => `<li>${bullet}</li>`).join("")}
        </ul>

        <div class="skill-line">
          <strong>SKILLS:</strong> ${project.skills}
        </div>
      </article>
    `;

    drawer.classList.add("open");
    scrollToDrawer();
  }

  // Main navigation.
  tabs.forEach(tab => {
    tab.addEventListener("click", event => {
      event.preventDefault();
      openDrawer(tab.dataset.section);
    });
  });

  // DNA project navigation.
  nodes.forEach(node => {
    node.addEventListener("click", event => {
      event.preventDefault();

      // Ignore clicks if Projects is not the active navigation section.
      const projectsActive =
        navigationZone.classList.contains("projects-active");

      if (!projectsActive) {
        return;
      }

      openProject(node.dataset.project);
    });
  });

  // Close button.
  if (closeDrawer) {
    closeDrawer.addEventListener("click", event => {
      event.preventDefault();

      drawer.classList.remove("open");
      navigationZone.classList.remove("projects-active");
      clearSelectedNode();
      setActiveTab("experience");
    });
  }

  // Set the intended initial state.
  setActiveTab("experience");
  navigationZone.classList.remove("projects-active");
  clearSelectedNode();
});