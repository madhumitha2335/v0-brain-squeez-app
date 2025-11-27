export interface ImportantQuestion {
  id: string
  question: string
  answer: string
}

export const importantQuestions: Record<string, ImportantQuestion[]> = {
  maths: [
    {
      id: "math-iq-1",
      question: "What is the Pythagorean Theorem and how is it applied?",
      answer:
        "The Pythagorean Theorem states that in a right triangle, a² + b² = c², where a and b are the legs and c is the hypotenuse. It is used to find missing side lengths in right triangles and is foundational in trigonometry and coordinate geometry.",
    },
    {
      id: "math-iq-2",
      question: "Explain the difference between permutation and combination.",
      answer:
        "Permutations count arrangements where order matters (n! or nPr = n!/(n-r)!). Combinations count selections where order doesn't matter (nCr = n!/(r!(n-r)!)). Example: Arranging 3 people in a line is a permutation; selecting 3 people for a team is a combination.",
    },
    {
      id: "math-iq-3",
      question: "How do you solve a system of linear equations?",
      answer:
        "Three main methods: 1) Substitution: Solve one equation for a variable and substitute into the other. 2) Elimination: Multiply equations and add/subtract to eliminate a variable. 3) Graphical: Plot both lines and find their intersection point. Choose based on equation complexity.",
    },
    {
      id: "math-iq-4",
      question: "What is a function and what are its characteristics?",
      answer:
        "A function is a relation where each input has exactly one output, written as f(x). Key characteristics: domain (inputs), range (outputs), one-to-one correspondence. Functions can be linear, quadratic, exponential, etc. Vertical line test determines if a graph is a function.",
    },
    {
      id: "math-iq-5",
      question: "Explain the concept of probability and its applications.",
      answer:
        "Probability measures likelihood of an event (0 to 1 scale). Formula: P(event) = favorable outcomes / total outcomes. Applications include: weather forecasting, insurance, games, medical diagnosis. Conditional probability, independent events, and probability distributions are advanced concepts.",
    },
  ],
  science: [
    {
      id: "science-iq-1",
      question: "What is the Law of Conservation of Energy?",
      answer:
        "Energy cannot be created or destroyed, only transformed from one form to another. Total energy in an isolated system remains constant. Example: In a pendulum, potential energy converts to kinetic energy as it swings. This is fundamental to understanding all physical processes.",
    },
    {
      id: "science-iq-2",
      question: "Explain photosynthesis and its importance.",
      answer:
        "Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Plants convert sunlight into chemical energy stored in glucose. Importance: produces oxygen for respiration, forms the base of food chains, removes CO₂ from atmosphere, sustains life on Earth.",
    },
    {
      id: "science-iq-3",
      question: "What is the difference between physical and chemical changes?",
      answer:
        "Physical changes: Alter appearance or state but not composition (melting, freezing, dissolving). Chemical changes: Alter composition creating new substances (burning, rusting, digestion). Tests: Can physical changes be reversed easily? Is energy released/absorbed? Do properties change completely?",
    },
    {
      id: "science-iq-4",
      question: "How does the immune system protect the body?",
      answer:
        "The immune system has two lines of defense: 1) Innate: physical barriers (skin), general response. 2) Adaptive: specific antibodies and T-cells. White blood cells engulf pathogens, lymphocytes produce antibodies, memory cells provide immunity. Vaccination trains the immune system.",
    },
    {
      id: "science-iq-5",
      question: "Explain the structure and function of DNA.",
      answer:
        "DNA has a double helix structure with bases (A-T, G-C pairs). Functions: stores genetic information, replicates for cell division, transcribed to mRNA for protein synthesis. Located in nucleus (and mitochondria, chloroplasts). Contains genes that determine traits and control cellular processes.",
    },
  ],
  english: [
    {
      id: "english-iq-1",
      question: "What are the main types of literary devices and their purposes?",
      answer:
        "Literary devices enhance writing: Metaphor/simile (comparison), personification (human qualities), alliteration (sound), irony (contradiction), foreshadowing (hints), hyperbole (exaggeration), symbolism (representation). Each creates specific effects: emphasis, emotion, imagery, or deeper meaning. Writers use them to engage readers.",
    },
    {
      id: "english-iq-2",
      question: "How do you write an effective essay?",
      answer:
        "Structure: Introduction (hook, thesis), Body (topic sentences, evidence, analysis), Conclusion (restatement, implications). Key elements: clear argument, supporting evidence, smooth transitions, varied sentence structure, proper grammar. Process: brainstorm, outline, draft, revise, proofread. Reader engagement through compelling examples.",
    },
    {
      id: "english-iq-3",
      question: "Explain the difference between active and passive voice.",
      answer:
        "Active voice: Subject performs action (The student wrote the essay). More direct and engaging. Passive voice: Subject receives action (The essay was written by the student). More formal but weaker. Active voice is preferred in most writing for clarity and strength. Use passive when emphasis on action is needed.",
    },
    {
      id: "english-iq-4",
      question: "What is the importance of theme in literature?",
      answer:
        "Theme is the central idea or message of a work. It reflects universal human experiences (love, death, justice). Importance: gives meaning to the story, helps readers connect emotionally, provides insights into human nature, often repeated through symbols and character development. Distinguishes great literature from mere entertainment.",
    },
    {
      id: "english-iq-5",
      question: "How does characterization develop throughout a story?",
      answer:
        "Characterization reveals personality through: appearance, actions, dialogue, thoughts, others' reactions. Direct characterization: explicit description. Indirect characterization: showing through behavior. Character development: change over time (static vs. dynamic). Round characters are complex; flat are simple. Character arcs show transformation and are crucial to plot.",
    },
  ],
  social: [
    {
      id: "social-iq-1",
      question: "What factors led to the fall of ancient Rome?",
      answer:
        "Multiple causes: political instability (civil wars), economic decline (inflation), military overextension, barbarian invasions, division into East/West empires, Christianity's spread, corruption. External pressure from Germanic tribes, internal decay of institutions. Fall of Western Rome in 476 CE, though Byzantine Empire continued.",
    },
    {
      id: "social-iq-2",
      question: "Explain the major impacts of the Industrial Revolution.",
      answer:
        "Impacts: technological advancement, factory system, urbanization, rise of working class, environmental pollution, child labor, class conflicts. Positive: increased production, economic growth, innovation. Negative: poor working conditions, social inequality. Led to labor movements, socialism, modern industrial society.",
    },
    {
      id: "social-iq-3",
      question: "What is the importance of cultural diversity in geography?",
      answer:
        "Cultural diversity reflects unique traditions, languages, religions, values of different regions. Importance: promotes creativity and innovation, enriches societies, prevents uniformity, enables intercultural understanding, drives tourism and trade. Understanding culture helps explain conflicts, migration patterns, and human behavior. Globalization both connects and threatens cultures.",
    },
    {
      id: "social-iq-4",
      question: "How do governments influence economic systems?",
      answer:
        "Governments use: fiscal policy (taxes, spending), monetary policy (interest rates), regulations, welfare programs, education investment. In capitalism, limited intervention; in socialism, extensive control. Mixed economies combine both. Policies affect employment, inflation, growth, inequality. Central banks manage currency and credit.",
    },
    {
      id: "social-iq-5",
      question: "What are the consequences of climate change on society?",
      answer:
        "Consequences: rising sea levels (flooding), extreme weather, biodiversity loss, agricultural disruption, economic costs, migration, health impacts, political conflicts. Disproportionate effect on developing nations. Solutions: renewable energy, conservation, carbon reduction, international cooperation. Long-term sustainability requires systemic change.",
    },
  ],
  history: [
    {
      id: "history-iq-1",
      question: "What were the main causes and consequences of World War II?",
      answer:
        "Causes: Treaty of Versailles resentment, economic depression, rise of fascism, appeasement policy. Consequences: 70-85 million deaths, Holocaust, territorial reshuffling, UN formation, Cold War beginning, nuclear age, end of European imperialism, US/USSR superpowers.",
    },
    {
      id: "history-iq-2",
      question: "How did the Renaissance transform European society?",
      answer:
        "Transformation: revival of classical learning, humanism (human potential), artistic and scientific advancement, questioning of religious authority, patronage system, printing press invention. Led to: Reformation, Scientific Revolution, Age of Exploration, modern education, secular thinking. Foundation for modern Europe.",
    },
    {
      id: "history-iq-3",
      question: "What was the significance of the French Revolution?",
      answer:
        "Significance: overthrew absolute monarchy, established democracy ideals, inspired revolutions worldwide, Declaration of Rights and Freedoms, Napoleon's rise, end of feudalism, spread of nationalism. Changed: power distribution, class structure, religious authority. Cost: terror, war, thousands of lives.",
    },
    {
      id: "history-iq-4",
      question: "Explain the role of colonization in shaping the modern world.",
      answer:
        "Colonization: European powers exploited resources, enslaved populations, imposed culture/religion. Effects: wealth transfer to Europe, poverty in colonies, cultural erasure, political boundaries (often arbitrary), ongoing conflicts, economic dependency. Led to independence movements, postcolonial challenges, lasting inequality and cultural impacts.",
    },
    {
      id: "history-iq-5",
      question: "How did technological advances influence historical events?",
      answer:
        "Technologies: printing press (information spread), steam engine (Industrial Revolution), railways (trade/empire), telegraph (communication), weapons (warfare), internet (globalization). Each transformed society, economy, warfare, and international relations. Technology both enables and complicates human progress throughout history.",
    },
  ],
  accounts: [
    {
      id: "accounts-iq-1",
      question: "Explain the double-entry accounting system.",
      answer:
        "Every transaction has two sides: debit and credit. Both equal, maintaining balance (Assets = Liabilities + Equity). Debits increase assets/expenses, decrease liabilities/equity. Credits do opposite. System ensures accuracy, tracks all movements, enables financial statements. Foundation of modern accounting.",
    },
    {
      id: "accounts-iq-2",
      question: "What is the difference between cash and accrual accounting?",
      answer:
        "Cash accounting: Records transactions when money changes hands. Accrual accounting: Records when earned/owed regardless of payment. Accrual is more accurate (GAAP standard), matches income to expenses, better for financial analysis. Cash is simpler but misleading for profit assessment. Most businesses use accrual.",
    },
    {
      id: "accounts-iq-3",
      question: "How are financial statements interconnected?",
      answer:
        "Income Statement determines net income. Net income flows to Retained Earnings in Balance Sheet. Cash Flow Statement shows cash from operations (from Income Statement items). Balance Sheet lists assets funded by liabilities and equity. Together they present complete financial picture: profitability, position, liquidity.",
    },
    {
      id: "accounts-iq-4",
      question: "What are internal controls and why are they important?",
      answer:
        "Internal controls: policies and procedures preventing fraud, errors, and theft. Importance: protect assets, ensure accurate records, promote efficiency, ensure compliance, reduce risk. Examples: authorization requirements, segregation of duties, reconciliation, audit trails. COSO framework guides control design.",
    },
    {
      id: "accounts-iq-5",
      question: "Explain depreciation and its accounting treatment.",
      answer:
        "Depreciation: systematic allocation of asset cost over useful life. Methods: straight-line (equal annual amount), declining balance (accelerated), units of production. Impact: reduces asset value on balance sheet, creates expense (reduces profit), provides tax deduction. Distinguishes from impairment (sudden loss).",
    },
  ],
  commerce: [
    {
      id: "commerce-iq-1",
      question: "How do supply and demand affect market prices?",
      answer:
        "When demand exceeds supply: prices increase (shortage). When supply exceeds demand: prices decrease (surplus). Equilibrium: supply = demand, stable price. Factors shifting supply: production costs, technology. Factors shifting demand: income, preferences, prices of related goods. Market finds equilibrium naturally.",
    },
    {
      id: "commerce-iq-2",
      question: "What is the importance of branding in commerce?",
      answer:
        "Branding: creates identity, builds customer loyalty, differentiates products, justifies premium pricing, establishes trust. Strong brands: consumer preference, market share, pricing power. Brand equity: intangible asset increasing company value. Built through: consistency, quality, marketing, customer experience, reputation management.",
    },
    {
      id: "commerce-iq-3",
      question: "Explain the role of middlemen in distribution.",
      answer:
        "Middlemen (retailers, wholesalers) bridge producers and consumers. Functions: reduce transaction costs, provide accessibility, break bulk, offer variety, provide services (credit, advice), handle logistics. However: add costs, sometimes inefficient. E-commerce reduces middlemen (disintermediation), changing traditional channels.",
    },
    {
      id: "commerce-iq-4",
      question: "How does globalization affect commerce?",
      answer:
        "Effects: expanded markets, increased competition, supply chain complexity, cost reduction through outsourcing, cultural exchange, job displacement in developed nations, exploitation in developing nations, environmental concerns. Benefits and challenges both emerge from global trade integration.",
    },
    {
      id: "commerce-iq-5",
      question: "What is business ethics and why is it crucial?",
      answer:
        "Business ethics: moral principles guiding conduct. Crucial because: builds trust, ensures legal compliance, attracts investors, improves employee morale, protects reputation, ensures sustainability. Issues: fraud, environment, labor rights, discrimination. Ethical businesses outperform long-term, creating shared value.",
    },
  ],
  economics: [
    {
      id: "economics-iq-1",
      question: "Explain the concept of elasticity in economics.",
      answer:
        "Elasticity measures responsiveness of quantity to price changes. Price elastic: quantity changes significantly with price. Inelastic: quantity relatively unchanged. Determinants: availability of substitutes, necessity vs. luxury, percentage of budget. Important for: pricing strategy, tax policy, understanding consumer behavior, revenue prediction.",
    },
    {
      id: "economics-iq-2",
      question: "What are the causes and effects of inflation?",
      answer:
        "Causes: increased money supply, rising costs (wages, resources), demand-pull, reduced productivity. Effects: reduced purchasing power, uncertainty, savings devaluation, wage-price spiral, fixed-income earners hurt. Moderate inflation acceptable (2-3%); high inflation destructive. Central banks control through monetary policy.",
    },
    {
      id: "economics-iq-3",
      question: "How does international trade benefit economies?",
      answer:
        "Benefits: specialization based on comparative advantage, increased efficiency, consumer choice variety, economies of scale, technology transfer, economic growth. Challenges: job displacement, infant industry vulnerability, environmental effects, wealth distribution. Comparative advantage ensures mutual gain from trade.",
    },
    {
      id: "economics-iq-4",
      question: "Explain the circular flow of the economy.",
      answer:
        "Households provide labor to firms (receiving wages), firms produce goods for households (receiving payment). Households spend income on goods/services, creating firm revenue. Government collects taxes, provides services. Foreign sector adds imports/exports. Understanding flow reveals how economic agents interact and create GDP.",
    },
    {
      id: "economics-iq-5",
      question: "What is fiscal policy and its tools?",
      answer:
        "Fiscal policy: government spending and taxation affecting economy. Tools: government spending (increases aggregate demand), taxation (reduces or increases spending), transfer payments (welfare, unemployment). Used to: stimulate during recession, cool down during inflation, redistribute wealth. Multiplier effect amplifies initial government action.",
    },
  ],
}
