export interface Note {
  id: string
  title: string
  content: string
}

export const subjectNotes: Record<string, Note[]> = {
  maths: [
    {
      id: "math-1",
      title: "Algebraic Equations",
      content: `Algebraic equations are mathematical statements that contain variables (unknowns) and numbers.

Key Concepts:
• Linear Equations: ax + b = 0
• Quadratic Equations: ax² + bx + c = 0
• Solutions: Values of variables that satisfy the equation

Methods to Solve:
1. Substitution Method
2. Elimination Method
3. Graphical Method

Examples:
• 2x + 5 = 13 → x = 4
• x² - 5x + 6 = 0 → x = 2 or x = 3

Practice: Solve 3x - 7 = 20`,
    },
    {
      id: "math-2",
      title: "Geometry Basics",
      content: `Geometry is the study of shapes, sizes, and properties of figures.

Important Shapes:
• Triangle: 3 sides, sum of angles = 180°
• Square: 4 equal sides, all angles = 90°
• Circle: Round shape, all points equidistant from center

Area & Perimeter:
• Square Area: a²
• Circle Area: πr²
• Triangle Area: (base × height)/2

Properties:
• Congruent shapes: Same size and shape
• Similar shapes: Same shape, different size`,
    },
    {
      id: "math-3",
      title: "Calculus Introduction",
      content: `Calculus is the study of continuous change.

Two Main Branches:
1. Differential Calculus: Rate of change (derivatives)
2. Integral Calculus: Accumulation (integrals)

Basic Concepts:
• Function: Relationship between input and output
• Limit: Value that a function approaches
• Derivative: Instantaneous rate of change
• Integral: Area under a curve

Applications:
• Physics: Motion and forces
• Economics: Optimization
• Engineering: Design and analysis`,
    },
  ],
  social: [
    {
      id: "social-1",
      title: "Ancient Civilizations",
      content: `Ancient civilizations shaped human history and culture.

Major Civilizations:
1. Mesopotamian (3500-539 BCE)
   - Invented writing (cuneiform)
   - Developed laws (Code of Hammurabi)

2. Egyptian (3100-30 BCE)
   - Built pyramids
   - Advanced agriculture

3. Indus Valley (2600-1900 BCE)
   - Planned cities
   - Unknown writing system

4. Chinese (2070 BCE onwards)
   - Great Wall
   - Silk Road trade

Key Achievements:
• Agriculture
• Writing systems
• Mathematics
• Architecture`,
    },
    {
      id: "social-2",
      title: "World Geography",
      content: `Geography studies the Earth\'s physical features and human societies.

Continents:
• Asia: Largest continent, 60% world population
• Africa: Second largest, rich resources
• Europe: Developed economies
• Americas: Large territories
• Oceania: Island nations

Climate Zones:
• Tropical: Hot and humid
• Temperate: Moderate climate
• Polar: Very cold

Geographic Features:
• Mountains
• Rivers
• Deserts
• Forests`,
    },
    {
      id: "social-3",
      title: "Modern World",
      content: `The modern world is characterized by globalization and technology.

Key Features:
• Technology: Internet, AI, automation
• Globalization: Connected economies
• Urbanization: Growth of cities
• Environmental concerns: Climate change

Global Challenges:
• Poverty
• Climate change
• Disease
• Conflict

Opportunities:
• Education
• Innovation
• Cooperation
• Development`,
    },
  ],
  science: [
    {
      id: "science-1",
      title: "Physics Fundamentals",
      content: `Physics is the study of matter and energy.

Basic Concepts:
• Force: Push or pull (F = ma)
• Energy: Capacity to do work
• Motion: Change in position
• Speed: Distance per unit time

Laws of Motion (Newton):
1. Object at rest stays at rest
2. F = ma
3. Action-reaction pairs

Energy Forms:
• Kinetic: Motion energy
• Potential: Stored energy
• Thermal: Heat energy
• Light: Electromagnetic energy`,
    },
    {
      id: "science-2",
      title: "Chemistry Essentials",
      content: `Chemistry is the study of substances and reactions.

Atomic Structure:
• Protons: Positive charge
• Neutrons: No charge
• Electrons: Negative charge

Chemical Bonding:
• Ionic: Electron transfer
• Covalent: Electron sharing
• Metallic: Metal lattice

Reactions:
• Exothermic: Releases energy
• Endothermic: Absorbs energy
• Combustion: Burning in oxygen

Important Concepts:
• pH: Acidity/basicity
• Oxidation: Loss of electrons
• Reduction: Gain of electrons`,
    },
    {
      id: "science-3",
      title: "Biology Overview",
      content: `Biology is the study of living organisms.

Levels of Organization:
• Cell: Smallest unit of life
• Tissue: Groups of cells
• Organ: Groups of tissues
• System: Groups of organs

Photosynthesis:
CO₂ + H₂O + Light → Glucose + O₂

Respiration:
Glucose + O₂ → CO₂ + H₂O + Energy

DNA & Genetics:
• DNA: Carries genetic information
• Chromosomes: DNA packages
• Genes: Units of inheritance`,
    },
  ],
  history: [
    {
      id: "history-1",
      title: "Renaissance & Reformation",
      content: `The Renaissance (14-17th century) marked the transition to modern Europe.

Renaissance Characteristics:
• Rebirth of classical learning
• Art and science flourishing
• Humanism: Focus on human potential
• Patronage by wealthy families

Key Figures:
• Leonardo da Vinci: Art & Science
• Michelangelo: Sculptor & Painter
• Machiavelli: Political theory

Reformation (1517-1648):
• Martin Luther: 95 Theses
• Religious reform
• Protestant churches formed

Impact:
• Cultural transformation
• Scientific revolution
• Modern nation-states`,
    },
    {
      id: "history-2",
      title: "Industrial Revolution",
      content: `The Industrial Revolution (1760-1840) transformed society.

Key Innovations:
• Steam engine: James Watt
• Textile machinery: Spinning jenny
• Railways: Transportation
• Factory system: Mass production

Changes:
• Shift from rural to urban
• Rise of working class
• Rapid technological advancement
• Economic growth

Social Impact:
• Factory conditions: Poor
• Child labor: Widespread
• Urban crowding: Slums
• Labor movements: Rights advocacy`,
    },
    {
      id: "history-3",
      title: "World Wars",
      content: `World Wars (1914-1945) shaped the modern world.

World War I (1914-1918):
• Causes: Alliances, imperialism
• Trench warfare
• 20 million casualties
• League of Nations formed

World War II (1939-1945):
• Fascism: Hitler, Mussolini, Tojo
• Holocaust: 6 million Jews
• Atomic bombs: Japan
• United Nations formed

Outcomes:
• New world order
• Cold War beginning
• Decolonization
• Technology advancement`,
    },
  ],
  english: [
    {
      id: "english-1",
      title: "Parts of Speech",
      content: `Parts of speech are categories of words by function.

Main Parts:
1. Nouns: Person, place, thing (book, cat, Paris)
2. Verbs: Action words (run, jump, think)
3. Adjectives: Describe nouns (blue, big, happy)
4. Adverbs: Modify verbs (quickly, slowly, well)
5. Pronouns: Replace nouns (he, she, it, they)
6. Prepositions: Show relationships (in, on, at, by)
7. Conjunctions: Connect words (and, but, or)
8. Interjections: Express emotion (oh, wow, ouch)

Functions:
• Subject: Who/what the sentence is about
• Predicate: What the subject does
• Object: Receives the action`,
    },
    {
      id: "english-2",
      title: "Literary Devices",
      content: `Literary devices enhance writing and create meaning.

Common Devices:
• Metaphor: Direct comparison (Life is a journey)
• Simile: Comparison with "like/as" (Brave as a lion)
• Personification: Human qualities to objects
• Alliteration: Repetition of initial sounds
• Irony: Opposite of what is expected
• Foreshadowing: Hints at future events
• Hyperbole: Extreme exaggeration

Examples in Literature:
• Shakespeare: Complex metaphors
• Dickens: Vivid descriptions
• Austen: Social irony
• Poe: Dark foreshadowing`,
    },
    {
      id: "english-3",
      title: "Writing Skills",
      content: `Effective writing requires planning and revision.

Writing Process:
1. Planning: Outline ideas
2. Drafting: Write first version
3. Editing: Check grammar/spelling
4. Proofreading: Final review

Key Elements:
• Thesis: Main idea
• Topic sentences: Guide paragraphs
• Evidence: Support arguments
• Transitions: Connect ideas
• Conclusion: Summarize main points

Common Mistakes:
• Run-on sentences: Join with punctuation
• Comma splices: Use semicolons
• Passive voice: Use active voice
• Wordiness: Be concise`,
    },
  ],
  accounts: [
    {
      id: "accounts-1",
      title: "Accounting Basics",
      content: `Accounting is recording and interpreting business transactions.

Fundamental Equation:
Assets = Liabilities + Equity

Key Concepts:
• Assets: What business owns
• Liabilities: What business owes
• Equity: Owner's investment

Basic Accounts:
• Cash: Money in hand
• Bank: Money in bank
• Receivables: Money owed to business
• Payables: Money business owes
• Capital: Owner's investment
• Revenue: Income from sales
• Expenses: Costs of operation

Journal Entry Format:
Date | Account | Debit | Credit
Explanation of transaction`,
    },
    {
      id: "accounts-2",
      title: "Financial Statements",
      content: `Financial statements report business financial condition.

Three Main Statements:

1. Income Statement:
   Revenue - Expenses = Net Profit/Loss
   Shows: Profitability

2. Balance Sheet:
   Assets = Liabilities + Equity
   Shows: Financial position

3. Cash Flow Statement:
   Operating + Investing + Financing Cash Flows
   Shows: Cash movement

Other Statements:
• Trial Balance: Check accuracy
• Profit & Loss Statement: Detailed income

Ratios:
• Profitability: Net Income / Revenue
• Liquidity: Current Assets / Current Liabilities
• Leverage: Debt / Equity`,
    },
    {
      id: "accounts-3",
      title: "Auditing & Compliance",
      content: `Auditing ensures financial accuracy and compliance.

Audit Process:
1. Planning: Understand business
2. Field work: Gather evidence
3. Reporting: Communicate findings

Types of Audits:
• External: Independent auditor
• Internal: Company's own auditor
• Government: Tax compliance

Key Objectives:
• Verify accuracy of records
• Ensure compliance with laws
• Prevent fraud
• Provide assurance to stakeholders

Professional Standards:
• GAAP: Generally Accepted Accounting Principles
• IFRS: International Financial Reporting Standards
• Auditing Standards: Guide audit procedures`,
    },
  ],
  commerce: [
    {
      id: "commerce-1",
      title: "Business Organization",
      content: `Business structure affects operations and taxes.

Types of Business:

1. Sole Proprietorship:
   • One owner
   • Simple to start
   • Full liability

2. Partnership:
   • Multiple owners
   • Shared liability
   • Shared profits

3. Corporation:
   • Separate legal entity
   • Limited liability
   • Publicly or privately held

4. Cooperative:
   • Member-owned
   • Democratic control
   • Profit sharing

Choice Factors:
• Liability protection
• Tax implications
• Capital requirements
• Management complexity`,
    },
    {
      id: "commerce-2",
      title: "Marketing Principles",
      content: `Marketing attracts and satisfies customers profitably.

Four Ps of Marketing:
1. Product: What to sell
2. Price: How much to charge
3. Place: Where to sell
4. Promotion: How to promote

Marketing Strategies:
• Segmentation: Divide market
• Targeting: Choose segments
• Positioning: Create image
• Differentiation: Stand out

Digital Marketing:
• Social media
• Email marketing
• Content marketing
• SEO optimization

Customer Relationship:
• Build loyalty
• Gather feedback
• Provide service
• Maintain engagement`,
    },
    {
      id: "commerce-3",
      title: "Business Ethics",
      content: `Ethics guide responsible business practices.

Core Principles:
• Honesty: Truthful dealings
• Fairness: Equitable treatment
• Accountability: Responsibility
• Respect: Value stakeholders

Ethical Issues:
• Transparency: Open communication
• Environmental: Sustainability
• Social: Community welfare
• Governance: Fair management

Stakeholders:
• Employees: Fair wages
• Customers: Quality products
• Community: Social responsibility
• Environment: Sustainable practices

Benefits:
• Reputation: Trust building
• Compliance: Follow laws
• Sustainability: Long-term success
• Employee satisfaction: Retention`,
    },
  ],
  economics: [
    {
      id: "economics-1",
      title: "Microeconomics",
      content: `Microeconomics studies individual markets and consumers.

Key Concepts:
• Supply: Quantity offered
• Demand: Quantity wanted
• Equilibrium: Supply = Demand
• Price: Market mechanism

Consumer Behavior:
• Utility: Satisfaction from goods
• Marginal utility: Additional satisfaction
• Budget constraint: Limited income
• Rational choice: Maximize satisfaction

Producer Behavior:
• Revenue: Price × Quantity
• Costs: Fixed + Variable
• Profit: Revenue - Costs
• Optimization: Maximize profit

Market Structures:
• Perfect competition: Many sellers
• Monopoly: One seller
• Oligopoly: Few sellers
• Monopolistic competition: Differentiation`,
    },
    {
      id: "economics-2",
      title: "Macroeconomics",
      content: `Macroeconomics studies whole economies.

Indicators:
• GDP: Total output value
• Inflation: Price level increase
• Unemployment: Jobless percentage
• Interest rates: Borrowing cost

Economic Systems:
• Capitalism: Market-driven
• Socialism: State-driven
• Mixed: Both systems
• Command: Central planning

Policies:
• Fiscal: Government spending/taxes
• Monetary: Money supply/rates
• Supply-side: Productivity
• Demand-side: Stimulus

Cycles:
• Expansion: Growing economy
• Peak: Highest point
• Recession: Declining economy
• Trough: Lowest point`,
    },
    {
      id: "economics-3",
      title: "International Trade",
      content: `International trade involves exchange across borders.

Benefits of Trade:
• Specialization: Focus on strengths
• Efficiency: Use resources well
• Variety: Access more goods
• Prices: Often lower

Trade Barriers:
• Tariffs: Import taxes
• Quotas: Quantity limits
• Subsidies: Government support
• Restrictions: Local protection

Exchange Rates:
• Appreciation: Currency stronger
• Depreciation: Currency weaker
• Affects: Exports/imports
• Market: Supply and demand

Organizations:
• WTO: World Trade Organization
• IMF: International Monetary Fund
• World Bank: Development loans`,
    },
  ],
}
