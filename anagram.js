// Word Lists
// https://www.wgtn.ac.nz/lals/resources/academicwordlist/awl-headwords
const academic_word_list = [
"abandon",
"abstract",
"academy",
"access",
"accommodate",
"accompany",
"accumulate",
"accurate",
"achieve",
"acknowledge",
"acquire",
"adapt",
"adequate",
"adjacent",
"adjust",
"administration",
"adult",
"advocate",
"affect",
"aggregate",
"aid",
"albeit",
"allocate",
"alter",
"alternative",
"ambiguous",
"amend",
"analogy",
"analyse",
"annual",
"anticipate",
"apparent",
"append",
"appreciate",
"approach",
"appropriate",
"approximate",
"arbitrary",
"area",
"aspect",
"assemble",
"assess",
"assign",
"assist",
"assume",
"assure",
"attach",
"attain",
"attitude",
"attribute",
"author",
"authority",
"automate",
"available",
"aware",
"behalf",
"benefit",
"bias",
"bond",
"brief",
"bulk",
"capable",
"capacity",
"category",
"cease",
"challenge",
"channel",
"chapter",
"chart",
"chemical",
"circumstance",
"cite",
"civil",
"clarify",
"classic",
"clause",
"code",
"coherent",
"coincide",
"collapse",
"colleague",
"commence",
"comment",
"commission",
"commit",
"commodity",
"communicate",
"community",
"compatible",
"considerable",
"consist",
"constant",
"constitute",
"constrain",
"construct",
"consult",
"consume",
"contact",
"contemporary",
"context",
"contract",
"contradict",
"contrary",
"contrast",
"contribute",
"controversy",
"convene",
"converse",
"convert",
"convince",
"cooperate",
"compensate",
"compile",
"complement",
"complex",
"component",
"compound",
"comprehensive",
"comprise",
"compute",
"conceive",
"concentrate",
"coordinate",
"core",
"corporate",
"correspond",
"couple",
"create",
"credit",
"criteria",
"crucial",
"culture",
"currency",
"cycle",
"data",
"debate",
"decade",
"decline",
"deduce",
"define",
"definite",
"demonstrate",
"denote",
"deny",
"concept",
"conclude",
"concurrent",
"conduct",
"confer",
"confine",
"confirm",
"conflict",
"conform",
"consent",
"consequent",
"depress",
"derive",
"design",
"despite",
"detect",
"deviate",
"device",
"devote",
"differentiate",
"dimension",
"diminish",
"discrete",
"discriminate",
"displace",
"display",
"dispose",
"distinct",
"distort",
"distribute",
"diverse",
"document",
"domain",
"domestic",
"dominate",
"draft",
"drama",
"duration",
"dynamic",
"economy",
"edit",
"element",
"eliminate",
"emerge",
"emphasis",
"empirical",
"enable",
"encounter",
"energy",
"enforce",
"enhance",
"enormous",
"ensure",
"entity",
"found",
"framework",
"function",
"fund",
"fundamental",
"furthermore",
"gender",
"generate",
"generation",
"globe",
"goal",
"grade",
"environment",
"equate",
"equip",
"equivalent",
"erode",
"error",
"establish",
"estate",
"estimate",
"ethic",
"ethnic",
"evaluate",
"eventual",
"evident",
"evolve",
"exceed",
"exclude",
"exhibit",
"expand",
"expert",
"explicit",
"grant",
"guarantee",
"guideline",
"hence",
"hierarchy",
"highlight",
"hypothesis",
"identical",
"identify",
"ideology",
"ignorance",
"illustrate",
"exploit",
"export",
"expose",
"external",
"extract",
"facilitate",
"factor",
"feature",
"federal",
"fee",
"file",
"final",
"finance",
"finite",
"flexible",
"fluctuate",
"focus",
"format",
"formula",
"forthcoming",
"foundation",
"image",
"immigrate",
"impact",
"implement",
"implicate",
"implicit",
"imply",
"impose",
"incentive",
"incidence",
"incline",
"income",
"incorporate",
"index",
"indicate",
"individual",
"induce",
"inevitable",
"infer",
"infrastructure",
"inherent",
"inhibit",
"initial",
"initiate",
"injure",
"innovate",
"input",
"insert",
"insight",
"inspect",
"instance",
"institute",
"instruct",
"integral",
"integrate",
"integrity",
"intelligence",
"intense",
"interact",
"intermediate",
"internal",
"interpret",
"interval",
"intervene",
"intrinsic",
"invest",
"investigate",
"invoke",
"involve",
"isolate",
"issue",
"item",
"job",
"journal",
"justify",
"label",
"labour",
"layer",
"lecture",
"legal",
"legislate",
"levy",
"liberal",
"licence",
"likewise",
"link",
"locate",
"logic",
"maintain",
"major",
"manipulate",
"manual",
"margin",
"mature",
"maximise",
"mechanism",
"media",
"mediate",
"medical",
"medium",
"mental",
"method",
"migrate",
"military",
"minimal",
"minimise",
"minimum",
"ministry",
"minor",
"mode",
"modify",
"monitor",
"motive",
"mutual",
"negate",
"network",
"neutral",
"nevertheless",
"nonetheless",
"norm",
"normal",
"notion",
"notwithstanding",
"nuclear",
"objective",
"obtain",
"obvious",
"occupy",
"occur",
"odd",
"offset",
"ongoing",
"option",
"orient",
"outcome",
"output",
"overall",
"overlap",
"overseas",
"panel",
"paradigm",
"paragraph",
"parallel",
"parameter",
"participate",
"partner",
"passive",
"perceive",
"percent",
"period",
"persist",
"perspective",
"phase",
"phenomenon",
"philosophy",
"physical",
"plus",
"policy",
"portion",
"pose",
"positive",
"potential",
"practitioner",
"precede",
"precise",
"predict",
"predominant",
"preliminary",
"presume",
"previous",
"primary",
"prime",
"principal",
"principle",
"prior",
"priority",
"proceed",
"process",
"professional",
"prohibit",
"project",
"promote",
"proportion",
"prospect",
"protocol",
"psychology",
"publication",
"publish",
"purchase",
"pursue",
"qualitative",
"quote",
"radical",
"random",
"range",
"ratio",
"rational",
"react",
"recover",
"refine",
"regime",
"region",
"register",
"regulate",
"reinforce",
"reject",
"relax",
"release",
"relevant",
"reluctance",
"rely",
"remove",
"require",
"research",
"reside",
"resolve",
"resource",
"respond",
"restore",
"restrain",
"restrict",
"retain",
"reveal",
"revenue",
"reverse",
"revise",
"revolution",
"rigid",
"role",
"route",
"scenario",
"schedule",
"scheme",
"scope",
"section",
"sector",
"secure",
"seek",
"stable",
"statistic",
"status",
"straightforward",
"strategy",
"stress",
"structure",
"style",
"submit",
"subordinate",
"subsequent",
"subsidy",
"substitute",
"successor",
"sufficient",
"sum",
"summary",
"supplement",
"survey",
"survive",
"suspend",
"sustain",
"symbol",
"tape",
"target",
"select",
"sequence",
"series",
"sex",
"shift",
"significant",
"similar",
"simulate",
"task",
"team",
"technical",
"technique",
"technology",
"temporary",
"tense",
"terminate",
"text",
"theme",
"theory",
"thereby",
"thesis",
"topic",
"trace",
"tradition",
"transfer",
"transform",
"transit",
"transmit",
"transport",
"trend",
"trigger",
"ultimate",
"undergo",
"site",
"so called",
"sole",
"somewhat",
"source",
"specific",
"specify",
"sphere",
"underlie",
"undertake",
"uniform",
"unify",
"unique",
"utilise",
"valid",
"vary",
"vehicle",
"version",
"via",
"violate",
"virtual",
"visible",
"vision",
"visual",
"volume",
"voluntary",
"welfare",
"whereas",
"whereby",
"widespread"];

const urban_dictionary_word_list = ["test", "test2"];

// https://myvocabulary.com/word-list/math-vocabulary/
const mathematics_word_list = [
"Abacus", 
"Absolute", 
"Abstract", 
"Abundant", 
"Accurate", 
"Acre", 
"Actual", 
"Acute", 
"Addition", 
"Adjacent", 
"Adjustment", 
"Advance", 
"Aggregate", 
"Algebra", 
"Algorithm", 
"Align", 
"Altitude", 
"Amount", 
"Amplification", 
"Analogue", 
"Analysis", 
"Angle", 
"Annulus", 
"Apex", 
"Application", 
"Arc", 
"Area", 
"Arithmetic", 
"Array", 
"Ascending", 
"Assessment", 
"Assign", 
"Asymmetry", 
"Attribute", 
"Average", 
"Axiom", 
"Axis", 
"Balance", 
"Base", 
"Basic", 
"Benchmark", 
"Binary", 
"Calculable", 
"Calculate", 
"Calculation", 
"Calibration", 
"Cardinal", 
"Cartesian", 
"Centigrade", 
"Chance", 
"Change", 
"Chart", 
"Circles", 
"Circular", 
"Circumference", 
"Coefficient", 
"Coherent", 
"Column", 
"Combination", 
"Common", 
"Complementary", 
"Component", 
"Composite", 
"Compound", 
"Comprehensive", 
"Computation", 
"Computation", 
"Compute", 
"Computer", 
"Concave", 
"Concentric", 
"Concept", 
"Conflate", 
"Congruent", 
"Conjugate", 
"Construct", 
"Context", 
"Continuum", 
"Convert", 
"Coordinate", 
"Corollary", 
"Correlation", 
"Counting", 
"Curve", 
"Cylinder", 
"Data", 
"Decimal", 
"Declivity", 
"Degree", 
"Delve", 
"Demonstrate", 
"Denominator", 
"Density", 
"Design", 
"Determine", 
"Deviation", 
"Devise", 
"Diagnostic", 
"Diagram", 
"Diameter", 
"Difference", 
"Digit", 
"Dimension", 
"Discipline", 
"Discover", 
"Disorder", 
"Distance", 
"Distribution", 
"Divide", 
"Dividend", 
"Divisibility", 
"Division", 
"Effect", 
"Element", 
"Ellipse", 
"Engineer", 
"Equal", 
"Equality", 
"Equation", 
"Equivalent", 
"Error", 
"Essential", 
"Establish", 
"Estimate", 
"Evidence", 
"Exact", 
"Example", 
"Exchange", 
"Experiment", 
"Explore", 
"Exponent", 
"Expression", 
"Extent", 
"Extract", 
"Extrapolate", 
"Factor", 
"Fahrenheit", 
"Fibonacci", 
"Figure", 
"Finance", 
"Finite", 
"Foot", 
"Form", 
"Formula", 
"Fraction", 
"Frequency", 
"Friction", 
"Function", 
"Fundamental", 
"Genius", 
"Geometric", 
"Geometry", 
"Googol", 
"Gram", 
"Graph", 
"Grid", 
"Gross", 
"Group", 
"Guesstimate", 
"Helix", 
"Hypotenuse", 
"Hypothesis", 
"Identify", 
"Imaginary", 
"Inch", 
"Inclination", 
"Inclusive", 
"Indivisible", 
"Inequality", 
"Infinite", 
"Information", 
"Innumerate", 
"Integer", 
"Integrate", 
"Interactive", 
"Interest", 
"Interpolate", 
"Intersect", 
"Interval", 
"Introduce", 
"Invalid", 
"Inversion", 
"Invert", 
"Investigate", 
"Involution", 
"Irrational number", 
"Irrefutable", 
"Isoclinal", 
"Isosceles", 
"Iteration", 
"Join", 
"Junction", 
"Juxtapose", 
"Kinetics", 
"Lateral", 
"Latitude", 
"Length", 
"Limit", 
"Linear", 
"Lines", 
"Logarithm", 
"Logic", 
"Longitude", 
"Magnetic", 
"Magnitude", 
"Margin", 
"Mathematician", 
"Mathematics", 
"Matrix", 
"Mean", 
"Measure", 
"Median", 
"Memory", 
"Meter", 
"Method", 
"Metric", 
"Mile", 
"Minus", 
"Mixed number", 
"Mode", 
"Model", 
"Motivate", 
"Motivation", 
"Multiple", 
"Multiplication", 
"Multiply", 
"Negative", 
"Net", 
"Notation", 
"Number", 
"Numeral", 
"Numeric", 
"Object", 
"Oblique", 
"Obtuse", 
"Octagon", 
"Octahedron", 
"Operation", 
"Optimism", 
"Order", 
"Ordinal", 
"Origin", 
"Outcome", 
"Outstanding", 
"Parallel", 
"Parallelogram", 
"Parity", 
"Partition", 
"Pattern", 
"Percent", 
"Percentage", 
"Perimeter", 
"Permutation", 
"Perpendicular", 
"Physics", 
"Pi", 
"Point", 
"Polygon", 
"Polynomial", 
"Portion", 
"Position", 
"Positive", 
"Power", 
"Practice", 
"Practicum", 
"Precise", 
"Predict", 
"Premise", 
"Prime", 
"Principle", 
"Prism", 
"Probability", 
"Problem", 
"Procedure", 
"Process", 
"Programming", 
"Projection", 
"Proof", 
"Properties", 
"Proportion", 
"Puzzle", 
"Pythagorean", 
"Quadrant", 
"Quadratic", 
"Quadrilateral", 
"Qualitative", 
"Quantity", 
"Quantum", 
"Question", 
"Quick", 
"Quincunx", 
"Quotient", 
"Radius", 
"Random", 
"Range", 
"Rank", 
"Ranking", 
"Rate", 
"Ratio", 
"Ratiocination", 
"Rational", 
"Reasoning", 
"Reciprocal", 
"Recognition", 
"Record", 
"Rectangular", 
"Regular polygon", 
"Relationship", 
"Relevance", 
"Repetition", 
"Replacement", 
"Represent", 
"Resilient", 
"Resistance", 
"Review", 
"Rhomboid", 
"Rhombus", 
"Root", 
"Rotation", 
"Rule", 
"Scalar", 
"Scale", 
"Scale factor", 
"Scalene", 
"Scientific notation", 
"Second", 
"Secondary", 
"Segment", 
"Sequence", 
"Shape", 
"Significant", 
"Similar", 
"Similarities", 
"Simple", 
"Simulate", 
"Sine wave", 
"Single", 
"Skill", 
"Solution", 
"Solve", 
"Spatial", 
"Spectrum", 
"Speculation", 
"Sphere", 
"Split", 
"Square", 
"Squared", 
"Standard", 
"Statistics", 
"Stochastic", 
"Strategy", 
"Stress", 
"Subset", 
"Subtraction", 
"Supplementary", 
"Survey", 
"Symbols", 
"Symmetry", 
"System", 
"System", 
"Technique", 
"Tertiary", 
"Test", 
"Testing", 
"Theorem", 
"Theory", 
"Three-dimensional", 
"Tier", 
"Trajectory", 
"Transformation", 
"Trend", 
"Triangle", 
"Underestimate", 
"Understanding", 
"Unit", 
"Universe", 
"Unknown", 
"Valid", 
"Value", 
"Variable", 
"Variety", 
"Vertical", 
"Volume", 
"Wave", 
"Weigh", 
"Weight", 
"Whole number", 
"Work", 
"Wrong", 
"X-coordinate", 
"Y-axis", 
"Zeal", 
"Zero", 
"Zero pair", 
"Zest", 
"Zeta function", 
"Zigzag", 
"Zone"
];

const english_word_list = [
"Abridgment", 
"Abstract", 
"Accented", 
"Adaptation", 
"Aestheticism", 
"Allegory", 
"Alliteration", 
"Allusion", 
"Almanac", 
"Ambiguity", 
"Amplification", 
"Analogy", 
"Analysis", 
"Anecdote", 
"Antagonist", 
"Anthology", 
"Anticlimax", 
"Antihero", 
"Antithesis", 
"Apocryphal", 
"Aptness", 
"Artistic", 
"Aside", 
"Atlas", 
"Atmosphere", 
"Audience", 
"Author", 
"Authorship", 
"Autobiography", 
"Avant-garde", 
"Ballad", 
"Bard", 
"Basic", 
"Bathos", 
"Belles letters", 
"Bibliography", 
"Biography", 
"Bombast", 
"Bucolic", 
"Cadence", 
"Canto", 
"Caricature", 
"Cast of characters", 
"Cause & effect", 
"Central", 
"Chanson", 
"Character", 
"Characterization", 
"Chronicle", 
"Chronology", 
"Cipher", 
"Clarity", 
"Classic", 
"Cliche", 
"Climax", 
"Coherence", 
"Collection", 
"Colloquialism", 
"Colophon", 
"Comedy", 
"Comparison", 
"Compendium", 
"Composition", 
"Conclusion", 
"Confession", 
"Confidant", 
"Conflict", 
"Connotation", 
"Contrast", 
"Convey", 
"Correlation", 
"Couplet", 
"Courtly love", 
"Criticism", 
"Critique", 
"Cycle", 
"Denotation", 
"Denouement", 
"Description", 
"Detective story", 
"Device", 
"Dialogue", 
"Diary", 
"Diatribe", 
"Didactic", 
"Discourse", 
"Document", 
"Doggerel", 
"Double meaning", 
"Drama", 
"Eclogue", 
"Elegy", 
"Element", 
"Emotion", 
"Emphasis", 
"Epic", 
"Epigram", 
"Epilogue", 
"Epistle", 
"Epitaph", 
"Epithet", 
"Epos", 
"Essay", 
"Euphemism", 
"Evoke", 
"Exhortation", 
"Expansive", 
"Exposition", 
"Expository", 
"Expression", 
"Fable", 
"Fantasy", 
"Farce", 
"Feeling", 
"Fiction", 
"Fictitious", 
"Figurative language", 
"Figure of speech", 
"Flashback", 
"Foil", 
"Fragment", 
"Fustian", 
"Generalization", 
"Genre", 
"Gloss", 
"Gothic", 
"Haiku", 
"Heroic", 
"Heroine", 
"Hidden message", 
"Historical fiction", 
"Humanity", 
"Hyperbole", 
"Iambic pentameter", 
"Idea", 
"Identifiable", 
"Idiom", 
"Idyll", 
"Imagery", 
"Imaginative", 
"Inference", 
"Inflection", 
"Innuendo", 
"Integrity", 
"Intonation", 
"Intrigue", 
"Introductory", 
"Irony", 
"Jargon", 
"Journal", 
"Juxtapose", 
"Key", 
"Lament", 
"Lampoon", 
"Language", 
"Legend", 
"Leitmotif", 
"Letters", 
"Lexicon", 
"Limerick", 
"Literal", 
"Literary", 
"Locale", 
"Lucidity", 
"Lyric", 
"Masterpiece", 
"Melodrama", 
"Memoir", 
"Metaphor", 
"Missive", 
"Monologue", 
"Moral", 
"Motif", 
"Motive", 
"Musical", 
"Mystery", 
"Myth", 
"Narrative", 
"Narrator", 
"Niche", 
"Nihilism", 
"Nom de plume", 
"Nonfiction", 
"Novel", 
"Novella", 
"Nuance", 
"Nursery rhyme", 
"Ode", 
"Omnibus", 
"Onomatopoeia", 
"Opinion", 
"Oration", 
"Oratory", 
"Outcome", 
"Oxymoron", 
"Parable", 
"Parlance", 
"Parody", 
"Passage", 
"Pastiche", 
"Pastoral poem", 
"Pathos", 
"Period", 
"Persona", 
"Personification", 
"Plagiarism", 
"Plot", 
"Poem", 
"Poetic", 
"Poetry", 
"Point of view", 
"Potboiler", 
"Prediction", 
"Preface", 
"Prologue", 
"Prominent", 
"Prose", 
"Protagonist", 
"Pseudonym", 
"Publisher", 
"Purpose", 
"Quality", 
"Quatrain", 
"Quintessential", 
"Realism", 
"Recitation", 
"Redundant", 
"Reference", 
"Repetition", 
"Resolution", 
"Rhetoric", 
"Rhyme", 
"Rhythm", 
"Roman a clef", 
"Rondeau", 
"Saga", 
"Sarcasm", 
"Satire", 
"Science fiction", 
"Scope", 
"Selection", 
"Semantics", 
"Sequence", 
"Serial", 
"Setting", 
"Short story", 
"Significance", 
"Simile", 
"Sketch", 
"Sonnet", 
"Stage", 
"Stanza", 
"Style", 
"Stylized", 
"Subtext", 
"Suggestive", 
"Symbol", 
"Technique", 
"Terminology", 
"Theme", 
"Thesaurus", 
"Thesis", 
"Thriller", 
"Tome", 
"Tone", 
"Topic sentence", 
"Tragedy", 
"Tragicomedy", 
"Treatise", 
"Trilogy", 
"Turning point", 
"Unction", 
"Understatement", 
"Unfolding", 
"Unity", 
"Utterance", 
"Verisimilitude", 
"Vernacular", 
"Verse", 
"Versification", 
"Vignette", 
"Vocative", 
"Voice", 
"Volume", 
"Western", 
"Word-smith", 
"Writings"
];

const science_word_list = [
"Abiosis", 
"Abrade", 
"Absorption", 
"Acceleration", 
"Accumulation", 
"Acid", 
"Acidic", 
"Activist", 
"Adaptation", 
"Agonistic", 
"Agrarian", 
"Airborne", 
"Alchemist", 
"Alignment", 
"Allele", 
"Alluvial", 
"Alveoli", 
"Ambiparous", 
"Amphibian", 
"Amplitude", 
"Analysis", 
"Ancestor", 
"Anodize", 
"Anomaly", 
"Anther", 
"Antigen", 
"Apiary", 
"Apparatus", 
"Application", 
"Approximation", 
"Aquatic", 
"Aquifer", 
"Arboreal", 
"Archeology", 
"Artery", 
"Assessment", 
"Asteroid", 
"Atmosphere", 
"Atomic", 
"Atrophy", 
"Attenuate", 
"Aven", 
"Aviary", 
"Axis", 
"Bacteria", 
"Balance", 
"Bases", 
"Biome", 
"Biosphere", 
"Black hole", 
"Blight", 
"Buoyancy", 
"Calcium", 
"Canopy", 
"Capacity", 
"Capillary", 
"Carapace", 
"Carcinogen", 
"Catalyst", 
"Cauldron", 
"Celestial", 
"Cells", 
"Centigrade", 
"Centimeter", 
"Centrifugal", 
"Chemical reaction", 
"Chemicals", 
"Chemistry", 
"Chlorophyll", 
"Choked", 
"Chromosome", 
"Chronic", 
"Churn", 
"Classification", 
"Climate", 
"Cloud", 
"Comet", 
"Composition", 
"Compound", 
"Compression", 
"Condensation", 
"Conditions", 
"Conduction", 
"Conductivity", 
"Conservation", 
"Constant", 
"Constellation", 
"Continental", 
"Convection", 
"Convention", 
"Cool", 
"Core", 
"Cosmic", 
"Crater", 
"Creature", 
"Crystals", 
"Cycle", 
"Cytoplasm", 
"Dampness", 
"Data", 
"Decay", 
"Decibel", 
"Deciduous", 
"Defoliate", 
"Density", 
"Denude", 
"Dependency", 
"Deposits", 
"Depth", 
"Desiccant", 
"Detritus", 
"Development", 
"Digestible", 
"Dilute", 
"Direction", 
"Disappearance", 
"Discovery", 
"Dislodge", 
"Displace", 
"Dissection", 
"Dissolution", 
"Dissolve", 
"Distance", 
"Diurnal", 
"Diverse", 
"Doldrums", 
"Dynamics", 
"Earthquake", 
"Eclipse", 
"Ecology", 
"Ecosystem", 
"Electricity", 
"Elements", 
"Elevation", 
"Embryo", 
"Endangered", 
"Endocrine", 
"Energy", 
"Entropy", 
"Environment", 
"Enzyme", 
"Epidermis", 
"Epoch", 
"Equilibrium", 
"Equine", 
"Erosion", 
"Essential", 
"Estuary", 
"Ethical", 
"Evaporation", 
"Event", 
"Evidence", 
"Evolution", 
"Examination", 
"Existence", 
"Expansion", 
"Experiment", 
"Extinction", 
"Extreme", 
"Facet", 
"Fault", 
"Fauna", 
"Feldspar", 
"Ferment", 
"Fission", 
"Fissure", 
"Flora", 
"Flourish", 
"Flowstone", 
"Foliage", 
"Food chain", 
"Forage", 
"Force", 
"Forecast", 
"Forensics", 
"Formations", 
"Fossil fuel", 
"Frequency", 
"Friction", 
"Fungi", 
"Fusion", 
"Galaxy", 
"Gastric", 
"Geo-science", 
"Geothermal", 
"Germination", 
"Gestation", 
"Global", 
"Gravitation", 
"Green", 
"Greenhouse effect", 
"Grotto", 
"Groundwater", 
"Habitat", 
"Heat", 
"Heavens", 
"Hemisphere", 
"Hemoglobin", 
"Herpetologist", 
"Hormones", 
"Host", 
"Humidity", 
"Hyaline", 
"Hydrogen", 
"Hydrology", 
"Hypothesis", 
"Ichthyology", 
"Illumination", 
"Imagination", 
"Impact", 
"Impulse", 
"Incandescent", 
"Indigenous", 
"Inertia", 
"Inevitable", 
"Inherit", 
"Inquiry", 
"Insoluble", 
"Instinct", 
"Instruments", 
"Integrity", 
"Intelligence", 
"Interact", 
"Interdependence", 
"Interplanetary", 
"Invertebrate", 
"Investigation", 
"Invisible", 
"Ions", 
"Irradiate", 
"Isobar", 
"Isotope", 
"Joule", 
"Jungle", 
"Jurassic", 
"Jutting", 
"Kilometer", 
"Kinetics", 
"Kingdom", 
"Knot", 
"Laser", 
"Latitude", 
"Lava", 
"Lethal", 
"Life", 
"Lift", 
"Light", 
"Limestone", 
"Lipid", 
"Lithosphere", 
"Load", 
"Lodestone", 
"Luminous", 
"Luster", 
"Magma", 
"Magnet", 
"Magnetism", 
"Mangrove", 
"Mantle", 
"Marine", 
"Marsh", 
"Mass", 
"Matter", 
"Measurements", 
"Mechanical", 
"Meiosis", 
"Meridian", 
"Metamorphosis", 
"Meteor", 
"Microbes", 
"Microcosm", 
"Migration", 
"Millennia", 
"Minerals", 
"Modulate", 
"Moisture", 
"Molecule", 
"Molten", 
"Monograph", 
"Monolith", 
"Motion", 
"Movement", 
"Mutant", 
"Mutation", 
"Mysterious", 
"Natural", 
"Navigable", 
"Navigation", 
"Negligence", 
"Nervous system", 
"Nesting", 
"Neutrons", 
"Niche", 
"Nocturnal", 
"Nuclear energy", 
"Numerous", 
"Nurture", 
"Obsidian", 
"Ocean", 
"Oceanography", 
"Omnivorous", 
"Opaque", 
"Orbit", 
"Organ", 
"Organism", 
"Ornithology", 
"Osmosis", 
"Oxygen", 
"Paleontologist", 
"Parallax", 
"Particle", 
"Penumbra", 
"Percolate", 
"Permafrost", 
"Permutation", 
"Petrify", 
"Petrograph", 
"Phenomena", 
"Physical property", 
"Planetary", 
"Plasma", 
"Polar", 
"Pole", 
"Pollination", 
"Polymer", 
"Population", 
"Precipitation", 
"Predator", 
"Prehensile", 
"Preservation", 
"Preserve", 
"Pressure", 
"Primate", 
"Pristine", 
"Probe", 
"Process", 
"Propagation", 
"Properties", 
"Protected", 
"Proton", 
"Pulley", 
"Qualitative data", 
"Quantum", 
"Quark", 
"Quarry", 
"Radiation", 
"Radioactivity", 
"Rain forest", 
"Ratio", 
"Reaction", 
"Reagent", 
"Realm", 
"Redwoods", 
"Reeds", 
"Reflection", 
"Refraction", 
"Relationships", 
"Reptile", 
"Research", 
"Resistance", 
"Resonate", 
"Rookery", 
"Rubble", 
"Runoff", 
"Salinity", 
"Sandbar", 
"Satellite", 
"Saturation", 
"Scientific investigation", 
"Scientist", 
"Sea floor", 
"Season", 
"Sedentary", 
"Sediment", 
"Sedimentary", 
"Seepage", 
"Seismic", 
"Sensors", 
"Shard", 
"Similarity", 
"Solar", 
"Soluble", 
"Solvent", 
"Sonic", 
"Sound", 
"Source", 
"Species", 
"Spectacular", 
"Spectrum", 
"Speed", 
"Sphere", 
"Spring", 
"Stage", 
"Stalactite", 
"Stalagmites", 
"Stimulus", 
"Substance", 
"Subterranean", 
"Sulfur", 
"Surface", 
"Survival", 
"Swamp", 
"Sylvan", 
"Symbiosis", 
"Symbol", 
"Synergy", 
"Synthesis", 
"Taiga", 
"Taxidermy", 
"Technology", 
"Tectonics", 
"Temperate", 
"Temperature", 
"Terrestrial", 
"Thermals", 
"Thermometer", 
"Thrust", 
"Torque", 
"Toxin", 
"Trade winds", 
"Tremors", 
"Tropical", 
"Umbra", 
"Unbelievable", 
"Underwater", 
"Unearth", 
"Unique", 
"Unite", 
"Unity", 
"Universal", 
"Unpredictable", 
"Unusual", 
"Ursine", 
"Vacuole", 
"Valuable", 
"Vapor", 
"Variable", 
"Variety", 
"Vast", 
"Velocity", 
"Ventifact", 
"Verdant", 
"Vespiary", 
"Viable", 
"Vibration", 
"Virus", 
"Viscosity", 
"Visible", 
"Vista", 
"Vital", 
"Vitreous", 
"Volt", 
"Volume", 
"Vulpine", 
"Wave", 
"Wax", 
"Weather", 
"Westerlies", 
"Wetlands", 
"Whitewater", 
"Xeriscape", 
"Xylem", 
"Yield", 
"Zero-impact", 
"Zone", 
"Zygote"
];

const history_word_list = [];

const geography_word_list = [];

const programming_word_list = [];

// https://www.myvocabulary.com/word-list/art-vocabulary/
const art_word_list = [
"Ability", 
"Absorbing", 
"Abstract", 
"Acclaimed", 
"Acquisition", 
"Acrylic", 
"Adaptation", 
"Adept", 
"Aesthetic", 
"Aficionado", 
"Analogous", 
"Angular", 
"Appreciation", 
"Arrangement", 
"Array", 
"Artistic", 
"Artlessness", 
"Assemblage", 
"Assemble", 
"Assist", 
"Assistance", 
"Asymmetry", 
"Attempt", 
"Attraction", 
"Audience", 
"Audience", 
"Authentic", 
"Avid", 
"Award-winning", 
"Axis", 
"Background", 
"Balance", 
"Baroque", 
"Beauty", 
"Beholder", 
"Bias", 
"Blur", 
"Bravado", 
"Bravo", 
"Brushwork", 
"Caliber", 
"Canvas", 
"Captivate", 
"Capture", 
"Carve", 
"Caution", 
"Celebrity", 
"Ceramics", 
"Chalk", 
"Charcoal", 
"Charisma", 
"Clamor", 
"Classic", 
"Clay", 
"Collaboration", 
"Collage", 
"Collection", 
"Color", 
"Commanding", 
"Commitment", 
"Communication", 
"Competition", 
"Complementary", 
"Component", 
"Composition", 
"Concave", 
"Concentration", 
"Connoisseur", 
"Contour", 
"Contract", 
"Contrast", 
"Contribution", 
"Converge", 
"Convex", 
"Cool color", 
"Coordination", 
"Crafts", 
"Creativity", 
"Crescendo", 
"Crowd-pleasing", 
"Culture", 
"Curator", 
"Curve", 
"Dabble", 
"Dazzle", 
"Debut", 
"Decor", 
"Decorative", 
"Demonstration", 
"Depth", 
"Design", 
"Device", 
"Diagonal", 
"Diffuse", 
"Digital image", 
"Direction", 
"Disorganized", 
"Display", 
"Distraction", 
"Diverse", 
"Diversity", 
"Dramatic", 
"Drive", 
"Dynamic", 
"Effect", 
"Element", 
"Eloquence", 
"Emotion", 
"Endurance", 
"Energy", 
"Ensemble", 
"Entertainment", 
"Essence", 
"Euphoric", 
"Evaluation", 
"Exaggeration", 
"Exalt", 
"Execution", 
"Exemplary", 
"Exhibition", 
"Exposure", 
"Expression", 
"Expressive", 
"Exquisite", 
"Extraordinary", 
"Facade", 
"Facets", 
"Facilitate", 
"Falter", 
"Fascination", 
"Features", 
"Finalist", 
"Flat", 
"Flexible", 
"Flourish", 
"Fluid", 
"Fluorescent", 
"Focus", 
"Foreground", 
"Form", 
"Format", 
"Forte", 
"Framework", 
"Frenzy", 
"Fuzz", 
"Gauge", 
"Genius", 
"Genre", 
"Geometric", 
"Gesture", 
"Glare", 
"Glaze", 
"Gloss", 
"Graceful", 
"Graphic", 
"Harmony", 
"Hatching", 
"Hiatus", 
"Highlight", 
"Hone", 
"Horizon line", 
"Hue", 
"Humanities", 
"Hype", 
"Iconic", 
"Idealization", 
"Illumination", 
"Illustration", 
"Illustrious", 
"Image", 
"Imagery", 
"Imagination", 
"Impact", 
"Impression", 
"Impressionist", 
"Impressive", 
"Impromptu", 
"Inclination", 
"Inconsistent", 
"Individual", 
"Influence", 
"Infusion", 
"Innovative", 
"Insight", 
"Inspirational", 
"Instrumental", 
"Integrity", 
"Intensity", 
"Intent", 
"International", 
"Interpretation", 
"Inventive", 
"Jagged", 
"Jargon", 
"Judge", 
"Judgment", 
"Juxtaposition", 
"Keen", 
"Key", 
"Landscape", 
"Legendary", 
"Light source", 
"Lighting", 
"Line", 
"Lively", 
"Luminous", 
"Luster", 
"Lyrical", 
"Magic", 
"Major", 
"Manifestation", 
"Masterwork", 
"Maximize", 
"Meager", 
"Measure", 
"Media", 
"Medium", 
"Memorable", 
"Minimize", 
"Minor", 
"Mixed", 
"Momentum", 
"Mood", 
"Motion", 
"Motivate", 
"Motivation", 
"Movement", 
"Movies", 
"Muse", 
"Neutral", 
"Niche", 
"Nimble", 
"Nostalgia", 
"Notation", 
"Nuance", 
"Ocher", 
"Oomph", 
"Opportunity", 
"Opt", 
"Optimal", 
"Ornate", 
"Outline", 
"Outstanding", 
"Oval", 
"Overlap", 
"Overture", 
"Painting", 
"Palette", 
"Parallel", 
"Participation", 
"Passionate", 
"Pastel", 
"Pattern", 
"Perception", 
"Perpendicular", 
"Persistence", 
"Perspective", 
"Perspiration", 
"Phenomenal", 
"Pigment", 
"Pinnacle", 
"Placement", 
"Popular", 
"Portrait", 
"Portrayal", 
"Pose", 
"Position", 
"Potent", 
"Pottery", 
"Powerful", 
"Practice", 
"Prelude", 
"Premiere", 
"Presence", 
"Pressure", 
"Primary", 
"Professional", 
"Profile", 
"Project", 
"Promising", 
"Proportion", 
"Provocative", 
"Quality", 
"Quantity", 
"Quick", 
"Quintessential", 
"Quirk", 
"Realistic", 
"Recede", 
"Recognition", 
"Refine", 
"Repetition", 
"Reputation", 
"Resilient", 
"Resonance", 
"Response", 
"Restraint", 
"Retrospective", 
"Revival", 
"Rhythm", 
"Scale", 
"Scenery", 
"Scheme", 
"Sculpt", 
"Sculpture", 
"Secondary", 
"Shade", 
"Shadow", 
"Shallowness", 
"Shapes", 
"Sharp", 
"Sketch", 
"Skill", 
"Solo", 
"Soulful", 
"Space", 
"Spectacular", 
"Spectrum", 
"Speculation", 
"Spin", 
"Spirit", 
"Spontaneity", 
"Spotlight", 
"Stamina", 
"Star", 
"Status", 
"Still life", 
"Stipple", 
"Straight", 
"Streak", 
"Strength", 
"Stretch", 
"Stunning", 
"Style", 
"Sublime", 
"Subtle", 
"Symbolic", 
"Symmetry", 
"Talent", 
"Technical", 
"Technicolor", 
"Technique", 
"Tertiary", 
"Texture", 
"Tint", 
"Tone", 
"Training", 
"Transform", 
"Transformation", 
"Transmission", 
"Ultimate", 
"Unbelievable", 
"Unconventional", 
"Unique", 
"Unity", 
"Unprecedented", 
"Unusual", 
"Value", 
"Vanguard", 
"Vanishing point", 
"Variation", 
"Variety", 
"Veer", 
"Version", 
"Vertical", 
"Vibrant", 
"Viewpoint", 
"Visibility", 
"Vision", 
"Visual", 
"Vital", 
"Volatile", 
"Warm", 
"Watercolor", 
"Whirl", 
"Zeal", 
"Zest", 
"Zip"]

const word_lists = {
    academic_word_list: academic_word_list,
    urban_dictionary_word_list: urban_dictionary_word_list,
    mathematics_word_list: mathematics_word_list,
    english_word_list: english_word_list,
    science_word_list: science_word_list,
    history_word_list: history_word_list,
    geography_word_list: geography_word_list,
    art_word_list: art_word_list
}



window.addEventListener("load", myInit, true); function myInit(){
    generateWordCategories();
  }

// Create HTML for word category select
function generateWordCategories(){
    categoryHTML = "<h3>Change Category</h3>";
    for (var word_list in word_lists){
        var category_name = word_list.split("_")[0];
        category_name = category_name.charAt(0).toUpperCase() + category_name.slice(1);
        categoryHTML += "<button type=\"button\" id=\"" + word_list + "\" class=\"btn btn-light m-1\" onclick=\"setCurrectWordList('" + word_list + "')\">" + category_name + "</button>"
    }
    document.getElementById("categories").innerHTML = categoryHTML;
    // Set default as academic word list
    setCurrectWordList("academic_word_list");
}


// var isAllWordsVisible = false;
// function toggleAllWordsDisplay(){
//     words_string = "";
//     if (isAllWordsVisible == false){
//         isAllWordsVisible = true;
//         for (var word_list in word_lists){
//             console.log(word_list);
//             words_string += word_list + "\n";
//             for (var word in word_lists.word_list){
//                 console.log(word);
//                 words_string += word_list[word] + "\n";
//             }
//         }

//     } else {
//         isAllWordsVisible = false;
//         words_string = "";
//     }
//     document.getElementById("all_words").innerHTML = words_string;
// }


// Default word list is academic word list
var currentWordList = academic_word_list;
// When category is selected by user set current word list 
function setCurrectWordList(selected_word_list){
    currentWordList = word_lists[selected_word_list];

    for (var word_list in word_lists){
        if (word_list == selected_word_list){
            document.getElementById(word_list).className = "btn btn-dark border m-1"
        } else {
            document.getElementById(word_list).className = "btn btn-light m-1"
        }
    }

}



var isGameActive = false;
function startRound(){
    // Don't start a new round if game is active
    if (isGameActive){
        return;
    } 
    
    isGameActive = true;
    loadAnagram();
    document.getElementById("timer_value").innerHTML=slider.value;
    startTimer();
    
    // Change the play button to show answer button
    // document.getElementById("play").className = "btn btn-light border btn-lg w-100";
    document.getElementById("play").innerHTML = "<button type=\"button\" class=\"btn btn-link btn-lg w-100 border border-success\" onclick=\"showAnswer(), endRound()\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Answer\"><img class=\"w-50\" src=\"/res/check.svg\" alt=\"Answer\"></button>";


}

// Stop the timer, set game not active, and reset play button 
function endRound(){
    isGameActive = false;
    stopTimer();

    // Reactivate the play button
    // document.getElementById("play").className = "btn btn-success btn-lg w-100";
    document.getElementById("play").innerHTML = "<button type=\"button\" class=\"btn btn-success btn-lg w-100\" id=\"play\" onclick=\"startRound()\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" title=\"Play\"><img class=\"w-50\" src=\"/res/play.svg\" alt=\"Play\"></button>";

}

var anagram_solution;
var anagram_with_hint;
// When user hits play or reset, load a word from the word list with the letters jumbled up
function loadAnagram(){
    anagram_solution = currentWordList[Math.floor(Math.random() * currentWordList.length)];
    do {
        shuffled_word = shuffleLetters(anagram_solution);
    }
    while (isNotShuffled(shuffled_word, anagram_solution));

    shuffled_word = shuffled_word.split('').join(' ');
    window.document.getElementById("anagram_word").innerHTML = shuffled_word;

    blank_solution = "";
    for (char in anagram_solution){
        blank_solution+="_ "
    }
    anagram_with_hint = blank_solution;
    window.document.getElementById("anagram_solution").innerHTML = anagram_with_hint;

}

// tests if anagram is sufficiently shuffled. Returns true if not shuffled enough.
function isNotShuffled(shuffled_word, anagram_solution){
    //  count of the number of characters that are in the same position
    var count = 0;
    for (let i = 0; i<shuffled_word.length; i++){
        if (shuffled_word[i]==anagram_solution[i]){
            count++;
        }
    }
    return (count > shuffled_word.length/2)
}

// When user requests a hint, fill a random the character from the anagram
function giveHint(){

    // generate array of indices that correspond to a blank space in the anagram hint
    var blankspaces_array =[];
    for (let i = 0; i < anagram_with_hint.length; i++) {
        if (anagram_with_hint[i]=="_"){
            blankspaces_array.push(i);
            i++;
        }
    }

    // If no blank spaces are left the full solution is shown -> end the round
    if (blankspaces_array.length == 1){
        endRound();
    }

    random_index = Math.floor(Math.random() * blankspaces_array.length);
    random_index_index = blankspaces_array[random_index];

    var anagram_with_hint_updated = "";
    for (let i=0; i < anagram_with_hint.length;i++){
        if (i == random_index_index){
            anagram_with_hint_updated+=anagram_solution[i/2];
        } else {
            anagram_with_hint_updated+=anagram_with_hint[i];
        }
    }
    anagram_with_hint = anagram_with_hint_updated;
    
    window.document.getElementById("anagram_solution").innerHTML = anagram_with_hint;
}

// Shuffle the letters of a given word
function shuffleLetters(word){
  var shuffled = word.split('').sort(function(){return 0.5-Math.random()}).join('');
  return shuffled;
}

function showAnswer(){
    window.document.getElementById("anagram_solution").innerHTML = anagram_solution.split('').join(' ');;
    stopTimer();
}


// -- Timer functions
// Set time slider
var slider = document.getElementById("myRange");
var output = document.getElementById("timer_value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var timerID;
// Take value from time limit slider and start the countdown
function startTimer() {
    secs = document.getElementById("timer_value").innerHTML;
    timerID = setInterval('Decrement()',1000);
}
function Decrement() {
    if(document.getElementById) {
        seconds=document.getElementById("timer_value");
        if(secs<=0) {
            stopTimer();
            alert('Times Up!');
        }
        else {
            secs--;
            document.getElementById("timer_value").innerHTML=secs;
        }
    }
}

function stopTimer(){
    clearInterval(timerID);
    document.getElementById("timer_value").innerHTML = slider.value;
}




function showDefinition(){
    url = "https://www.google.com/search?q=define+"+anagram_solution;
    window.open(url, '_blank');
}
