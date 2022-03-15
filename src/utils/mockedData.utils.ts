export const mockedReportItemData = [
  {
    id: 0,
    questionsQtd: 5,
    creationDate: new Date()
  },
  {
    id: 1,
    questionsQtd: 0,
    creationDate: new Date()
  },
  {
    id: 2,
    questionsQtd: 3,
    creationDate: new Date()
  },
  {
    id: 3,
    questionsQtd: 50,
    creationDate: new Date()
  },
  {
    id: 4,
    questionsQtd: 25,
    creationDate: new Date()
  }
]

export const mockLocalStorageReports = [
  {
    data: [
      {
        question: 'What is the smallest country in South America by area?',
        difficulty: 'medium',
        answers: [
          { text: 'Uruguay', correct: false },
          { text: 'Suriname', correct: true },
          { text: 'Chile', correct: false },
          { text: 'Brazil', correct: false }
        ],
        option: 'Uruguay'
      },
      {
        question:
          'What is the first Studio Album to be released on the Internet with a &quot;Pay-What-You-Want&quot; price?',
        difficulty: 'hard',
        answers: [
          { text: 'Blackstar', correct: false },
          { text: 'The Help Album', correct: false },
          { text: 'In Rainbows', correct: true },
          { text: 'Skrillex and Diplo Present Jack &Uuml;', correct: false }
        ],
        option: 'The Help Album'
      },
      {
        question:
          'Which of these mythological creatures is said to be half-man and half-horse?',
        difficulty: 'easy',
        answers: [
          { text: 'Centaur', correct: true },
          { text: 'Gorgon', correct: false },
          { text: 'Minotaur', correct: false },
          { text: 'Pegasus', correct: false }
        ],
        option: 'Pegasus'
      },
      {
        question:
          'What is the name of the only remaining Grand Duchy in the world ?',
        difficulty: 'medium',
        answers: [
          { text: 'Luxembourg', correct: true },
          { text: 'Andorra', correct: false },
          { text: 'Montenegro', correct: false },
          { text: 'Liechtenstein', correct: false }
        ],
        option: 'Montenegro'
      }
    ],
    createdAt: '2022-03-14T20:23:23.153Z'
  },
  {
    data: [
      {
        question:
          'What is the name of the main island in PLAYERUNKNOWN&#039;S BATTLEGROUNDS?',
        difficulty: 'hard',
        answers: [
          { text: 'Erangel', correct: true },
          { text: 'Lastovo', correct: false },
          { text: 'Marmara', correct: false },
          { text: 'Severny', correct: false }
        ],
        option: 'Severny'
      },
      {
        question:
          'What was the code name for the German invasion of the Soviet Union in WW2?',
        difficulty: 'medium',
        answers: [
          { text: 'Operation Kaiserschlact', correct: false },
          { text: 'Operation Molotov', correct: false },
          { text: 'Operation Barbarossa', correct: true },
          { text: 'Operation Unthinkable', correct: false }
        ],
        option: 'Operation Unthinkable'
      },
      {
        question: 'Janus was the Roman god of doorways and passageways.',
        difficulty: 'hard',
        answers: [
          { text: 'True', correct: true },
          { text: 'False', correct: false }
        ],
        option: 'True'
      }
    ],
    createdAt: '2022-03-14T20:27:08.763Z'
  },
  {
    data: [
      {
        question: 'Who is the lead singer of Pearl Jam?',
        difficulty: 'easy',
        answers: [
          { text: 'Stone Gossard', correct: false },
          { text: 'Kurt Cobain', correct: false },
          { text: 'Eddie Vedder', correct: true },
          { text: 'Ozzy Osbourne', correct: false }
        ],
        option: 'Stone Gossard'
      }
    ],
    createdAt: '2022-03-15T03:19:57.695Z'
  }
]
