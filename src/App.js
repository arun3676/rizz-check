import React, { useState } from 'react';
import { Heart, Sparkles, Flame, Zap, Star, Users, Brain, Target, Coffee } from 'lucide-react';

export default function App() {
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const ageGroups = [
    { id: 'teen', label: '13-17', emoji: '🎒' },
    { id: 'college', label: '18-22', emoji: '🎓' },
    { id: 'young', label: '23-27', emoji: '💼' },
    { id: 'adult', label: '28+', emoji: '👔' }
  ];

  const difficultyModes = [
    { id: 'basic', label: 'Casual', emoji: '😎', icon: Coffee, description: 'Easy vibes, simple choices' },
    { id: 'smart', label: 'Strategic', emoji: '🎯', icon: Target, description: 'Think smart, play smart' },
    { id: 'intelligent', label: 'Expert', emoji: '🧠', icon: Brain, description: 'Complex scenarios, next level' }
  ];

  const getQuestions = (ageId, mode) => {
    const questionData = {
      teen: {
        basic: [
          {
            question: "Your crush is posting sad song lyrics on their story. Your move?",
            options: [
              { text: "Send a funny meme to cheer them up", points: 3 },
              { text: "Ask if they want to talk about it", points: 4 },
              { text: "React with a heart and see what happens", points: 2 },
              { text: "Ignore it - too much drama", points: 1 }
            ]
          },
          {
            question: "Group project and your crush is your partner:",
            options: [
              { text: "Take the lead and impress them with your ideas", points: 4 },
              { text: "Suggest meeting at a café to work together", points: 3 },
              { text: "Do your part well and be helpful", points: 2 },
              { text: "Just get it done as quickly as possible", points: 1 }
            ]
          },
          {
            question: "Your texting style is:",
            options: [
              { text: "Quick responses with good energy", points: 4 },
              { text: "Thoughtful replies that keep conversations going", points: 3 },
              { text: "Normal responses, nothing special", points: 2 },
              { text: "One-word answers or very delayed", points: 1 }
            ]
          }
        ],
        smart: [
          {
            question: "They post about failing a test. Your response strategy:",
            options: [
              { text: "Offer to study together for the next one", points: 4 },
              { text: "Share a relatable failure story to make them laugh", points: 3 },
              { text: "Send supportive message about bouncing back", points: 2 },
              { text: "Like the post and move on", points: 1 }
            ]
          },
          {
            question: "At a friend's birthday party, your crush is there but talking to someone else:",
            options: [
              { text: "Join the conversation naturally with something interesting", points: 4 },
              { text: "Wait for a good moment to approach them alone", points: 3 },
              { text: "Make eye contact and smile when they look over", points: 2 },
              { text: "Avoid them to not seem desperate", points: 1 }
            ]
          },
          {
            question: "Your Instagram story game focuses on:",
            options: [
              { text: "Showing your personality and interests authentically", points: 4 },
              { text: "Mix of fun moments and achievements", points: 3 },
              { text: "Random stuff when you remember to post", points: 2 },
              { text: "Barely post or very generic content", points: 1 }
            ]
          }
        ],
        intelligent: [
          {
            question: "You notice they always seem stressed about family expectations:",
            options: [
              { text: "Listen without judgment and share your own pressures", points: 4 },
              { text: "Suggest fun distractions when they need a break", points: 3 },
              { text: "Give motivational advice about handling pressure", points: 2 },
              { text: "Change the topic - too heavy to deal with", points: 1 }
            ]
          },
          {
            question: "Your approach to building connection is:",
            options: [
              { text: "Find common interests and create inside jokes", points: 4 },
              { text: "Be genuinely curious about their thoughts and goals", points: 3 },
              { text: "Share experiences and be vulnerable when appropriate", points: 2 },
              { text: "Keep things surface level and fun", points: 1 }
            ]
          },
          {
            question: "When they mention feeling misunderstood by friends:",
            options: [
              { text: "Validate their feelings and show you 'get' them", points: 4 },
              { text: "Share a time when you felt the same way", points: 3 },
              { text: "Suggest they talk to their friends about it", points: 2 },
              { text: "Say everyone goes through that phase", points: 1 }
            ]
          }
        ]
      },
      college: {
        basic: [
          {
            question: "You're at a house party and your crush is by the snacks looking bored:",
            options: [
              { text: "Comment on how the host clearly prioritized quantity over quality", points: 4 },
              { text: "Ask if they want to escape to somewhere quieter", points: 3 },
              { text: "Offer to get them a better drink", points: 2 },
              { text: "Grab some food and leave them alone", points: 1 }
            ]
          },
          {
            question: "Your dating app opening line strategy:",
            options: [
              { text: "Reference something specific from their profile", points: 4 },
              { text: "Ask an interesting question about their photos", points: 3 },
              { text: "Use a clever pickup line", points: 2 },
              { text: "Go with 'Hey' and see what happens", points: 1 }
            ]
          },
          {
            question: "They mention they're stressed about placements/career:",
            options: [
              { text: "Share resources and offer to practice interviews together", points: 4 },
              { text: "Listen to their concerns and give practical advice", points: 3 },
              { text: "Reassure them they'll figure it out", points: 2 },
              { text: "Change the topic to something lighter", points: 1 }
            ]
          }
        ],
        smart: [
          {
            question: "You find out they're into the same niche hobby as you:",
            options: [
              { text: "Suggest doing that activity together sometime", points: 4 },
              { text: "Share your knowledge and ask about their experience", points: 3 },
              { text: "Get excited and bond over shared interest", points: 2 },
              { text: "Just mention you're into it too", points: 1 }
            ]
          },
          {
            question: "At 2 AM they send you a random thought or meme:",
            options: [
              { text: "Engage with it and turn it into a fun late-night conversation", points: 4 },
              { text: "Respond enthusiastically and share your own random thought", points: 3 },
              { text: "React positively but keep it brief", points: 2 },
              { text: "Like it but don't reply since it's late", points: 1 }
            ]
          },
          {
            question: "Your strategy for making plans with them:",
            options: [
              { text: "Suggest specific activities based on their interests", points: 4 },
              { text: "Propose a few options and let them choose", points: 3 },
              { text: "Ask what they want to do", points: 2 },
              { text: "Wait for them to suggest hanging out", points: 1 }
            ]
          }
        ],
        intelligent: [
          {
            question: "They open up about feeling lost about their future:",
            options: [
              { text: "Help them explore their values and what truly excites them", points: 4 },
              { text: "Share your own journey of figuring things out", points: 3 },
              { text: "Listen supportively and ask thoughtful questions", points: 2 },
              { text: "Give generic advice about following their passion", points: 1 }
            ]
          },
          {
            question: "You notice they seem insecure about their appearance in group photos:",
            options: [
              { text: "Genuinely compliment something specific you find attractive about them", points: 4 },
              { text: "Make them laugh and boost their confidence naturally", points: 3 },
              { text: "Tell them they look good and not to worry", points: 2 },
              { text: "Don't address it - might make it worse", points: 1 }
            ]
          },
          {
            question: "Your approach to showing romantic interest is:",
            options: [
              { text: "Build emotional connection first, then escalate naturally", points: 4 },
              { text: "Be subtly flirty while being a good friend", points: 3 },
              { text: "Drop hints and see if they pick up on them", points: 2 },
              { text: "Stay friendly and hope they make the first move", points: 1 }
            ]
          }
        ]
      },
      young: {
        basic: [
          {
            question: "You match with someone attractive on a dating app:",
            options: [
              { text: "Start with something witty about their profile", points: 4 },
              { text: "Ask about their weekend plans", points: 3 },
              { text: "Compliment their photos", points: 2 },
              { text: "Send a generic opener", points: 1 }
            ]
          },
          {
            question: "At a networking event, you meet someone you're attracted to:",
            options: [
              { text: "Find genuine common professional ground to connect on", points: 4 },
              { text: "Exchange contacts and suggest coffee to continue the conversation", points: 3 },
              { text: "Keep it professional but friendly", points: 2 },
              { text: "Just exchange business cards", points: 1 }
            ]
          },
          {
            question: "Your go-to first date idea:",
            options: [
              { text: "Something interactive where you can actually talk and have fun", points: 4 },
              { text: "Coffee or drinks in a place with good ambiance", points: 3 },
              { text: "Dinner at a nice restaurant", points: 2 },
              { text: "Whatever they want to do", points: 1 }
            ]
          }
        ],
        smart: [
          {
            question: "They mention they just moved to the city and don't know many people:",
            options: [
              { text: "Offer to show them your favorite spots and introduce them to your friend group", points: 4 },
              { text: "Invite them to join you at an upcoming event", points: 3 },
              { text: "Give them recommendations for places to check out", points: 2 },
              { text: "Say they'll meet people soon enough", points: 1 }
            ]
          },
          {
            question: "On your second date, conversation is flowing well:",
            options: [
              { text: "Share something more personal about yourself", points: 4 },
              { text: "Ask deeper questions about their life and goals", points: 3 },
              { text: "Keep the good vibes going with fun topics", points: 2 },
              { text: "Stick to safe, surface-level conversation", points: 1 }
            ]
          },
          {
            question: "They cancel last-minute due to work stress:",
            options: [
              { text: "Be understanding and suggest helping them de-stress when they're free", points: 4 },
              { text: "Say no worries and suggest rescheduling for when things calm down", points: 3 },
              { text: "Just say 'no problem' and wait for them to reschedule", points: 2 },
              { text: "Feel annoyed but don't say anything", points: 1 }
            ]
          }
        ],
        intelligent: [
          {
            question: "You're both at different life stages (career, goals, etc.):",
            options: [
              { text: "Find ways your different perspectives can complement each other", points: 4 },
              { text: "Be honest about where you are and what you want", points: 3 },
              { text: "Focus on what you have in common", points: 2 },
              { text: "Downplay the differences and hope it works out", points: 1 }
            ]
          },
          {
            question: "They seem hesitant about commitment due to past relationships:",
            options: [
              { text: "Create a safe space for them to open up while showing you're different", points: 4 },
              { text: "Be patient and consistent to build trust over time", points: 3 },
              { text: "Reassure them you're not like their ex", points: 2 },
              { text: "Push for clarity about what they want", points: 1 }
            ]
          },
          {
            question: "Your approach to maintaining mystery while building intimacy:",
            options: [
              { text: "Share authentically but leave room for discovery", points: 4 },
              { text: "Be open about important things but keep some spontaneity", points: 3 },
              { text: "Gradually reveal more as trust builds", points: 2 },
              { text: "Either overshare or stay too guarded", points: 1 }
            ]
          }
        ]
      },
      adult: {
        basic: [
          {
            question: "You're interested in a colleague, but want to keep things professional:",
            options: [
              { text: "Find opportunities to collaborate and show your best professional self", points: 4 },
              { text: "Suggest coffee to discuss work but let natural chemistry develop", points: 3 },
              { text: "Keep interactions friendly and professional", points: 2 },
              { text: "Avoid any personal interaction", points: 1 }
            ]
          },
          {
            question: "At a dinner party, you meet someone intriguing:",
            options: [
              { text: "Engage them in meaningful conversation about shared interests", points: 4 },
              { text: "Find a way to continue the conversation privately", points: 3 },
              { text: "Exchange contact information before leaving", points: 2 },
              { text: "Enjoy the conversation but don't pursue further", points: 1 }
            ]
          },
          {
            question: "Your online dating profile emphasizes:",
            options: [
              { text: "Authentic personality with clear communication about what you want", points: 4 },
              { text: "Your interests and lifestyle honestly", points: 3 },
              { text: "Your best photos and basic info", points: 2 },
              { text: "Just photos and minimal text", points: 1 }
            ]
          }
        ],
        smart: [
          {
            question: "Someone you're dating mentions they're going through a difficult family situation:",
            options: [
              { text: "Offer specific support while respecting their boundaries", points: 4 },
              { text: "Listen actively and ask how you can help", points: 3 },
              { text: "Be sympathetic and available when they need you", points: 2 },
              { text: "Give space and wait for them to bring it up", points: 1 }
            ]
          },
          {
            question: "You're both busy professionals trying to date:",
            options: [
              { text: "Find creative ways to connect despite busy schedules", points: 4 },
              { text: "Plan dates efficiently but make them meaningful", points: 3 },
              { text: "Schedule regular check-ins when possible", points: 2 },
              { text: "Accept that timing might not work out", points: 1 }
            ]
          },
          {
            question: "They seem successful but mention feeling unfulfilled:",
            options: [
              { text: "Help them explore what fulfillment means to them", points: 4 },
              { text: "Share your own experiences with finding purpose", points: 3 },
              { text: "Encourage them to pursue what makes them happy", points: 2 },
              { text: "Suggest they should be grateful for their success", points: 1 }
            ]
          }
        ],
        intelligent: [
          {
            question: "You're considering a serious relationship but have different life goals:",
            options: [
              { text: "Have honest conversations about compatibility and compromise", points: 4 },
              { text: "Explore if there's a way to align your futures", points: 3 },
              { text: "Focus on the present and see how things develop", points: 2 },
              { text: "Assume one of you will change your mind", points: 1 }
            ]
          },
          {
            question: "They have trust issues from previous relationships:",
            options: [
              { text: "Consistently demonstrate trustworthiness through actions, not just words", points: 4 },
              { text: "Encourage them to work through their issues while being supportive", points: 3 },
              { text: "Be patient and hope they'll open up over time", points: 2 },
              { text: "Tell them they need to get over their past", points: 1 }
            ]
          },
          {
            question: "Your approach to integrating them into your established life:",
            options: [
              { text: "Thoughtfully introduce them to important people and aspects of your life", points: 4 },
              { text: "Find natural opportunities to include them in your world", points: 3 },
              { text: "Let them meet your friends and see how it goes", points: 2 },
              { text: "Keep your dating life separate from everything else", points: 1 }
            ]
          }
        ]
      }
    };
    
    return questionData[ageId]?.[mode] || [];
  };

  const handleAgeSelect = (ageId) => {
    setSelectedAge(ageId);
  };

  const handleModeSelect = (modeId) => {
    setSelectedMode(modeId);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswer = (points) => {
    const newScore = score + points;
    setScore(newScore);
    
    const questions = getQuestions(selectedAge, selectedMode);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRizzLevel = () => {
    const questions = getQuestions(selectedAge, selectedMode);
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;
    
    const levelData = {
      intelligent: {
        90: { level: "Social Genius", emoji: "🧠⚡", color: "from-teal-600 to-cyan-600", description: "Your social intelligence is unmatched. People gravitate toward you naturally.", levelUp: false },
        75: { level: "Tactical Expert", emoji: "🎯💫", color: "from-teal-500 to-cyan-500", description: "You read situations perfectly and know exactly what to do.", levelUp: false },
        60: { level: "Strategic Player", emoji: "♟️✨", color: "from-teal-400 to-cyan-400", description: "You think before you act. Smart approach, just need more execution.", levelUp: false },
        40: { level: "Overthinker", emoji: "🤔💭", color: "from-slate-500 to-teal-400", description: "Sometimes simple beats complex. Trust your instincts more.", levelUp: true },
        0: { level: "Analysis Paralysis", emoji: "😅📊", color: "from-gray-500 to-slate-500", description: "You're stuck in your head. Time to take action and level up!", levelUp: true }
      },
      smart: {
        90: { level: "Smooth Operator", emoji: "😎🔥", color: "from-teal-600 to-cyan-600", description: "You've got game and everyone knows it. Natural confidence with smart moves.", levelUp: false },
        75: { level: "Strategic Charmer", emoji: "🎯😊", color: "from-teal-500 to-cyan-500", description: "Perfect balance of planning and spontaneity. You're dangerous.", levelUp: false },
        60: { level: "Rising Player", emoji: "📈💪", color: "from-teal-400 to-cyan-400", description: "You're getting there. Keep practicing and you'll be unstoppable.", levelUp: false },
        40: { level: "Needs Strategy", emoji: "🎮🤷", color: "from-slate-500 to-teal-400", description: "You understand the game but need better tactics. Time to level up!", levelUp: true },
        0: { level: "Random Mode", emoji: "🎲😬", color: "from-gray-500 to-slate-500", description: "Your approach is too unpredictable. Level up with some planning!", levelUp: true }
      },
      basic: {
        90: { level: "Natural Charmer", emoji: "✨😍", color: "from-teal-600 to-cyan-600", description: "You don't need tricks. Your authentic self is magnetic.", levelUp: false },
        75: { level: "Genuine Vibe", emoji: "🌟😊", color: "from-teal-500 to-cyan-500", description: "People love your energy. Keep being yourself.", levelUp: false },
        60: { level: "Good Energy", emoji: "☀️🙂", color: "from-teal-400 to-cyan-400", description: "You're approachable and likeable. Build on this foundation.", levelUp: false },
        40: { level: "Friendly Face", emoji: "🙂👋", color: "from-slate-500 to-teal-400", description: "You're nice to be around. Just need more confidence to level up!", levelUp: true },
        0: { level: "Wallflower", emoji: "🌸😳", color: "from-gray-500 to-slate-500", description: "You're playing it too safe. Time to step up your game and level up!", levelUp: true }
      }
    };

    const modeResults = levelData[selectedMode];
    for (const threshold of [90, 75, 60, 40, 0]) {
      if (percentage >= threshold) {
        return modeResults[threshold];
      }
    }
    return modeResults[0];
  };

  const resetQuiz = () => {
    setSelectedAge(null);
    setSelectedMode(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (!selectedAge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-cyan-900 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          
          <div className="mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full">
                <Flame className="text-white" size={28} />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Rizz Check
              </h1>
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full">
                <Zap className="text-white" size={28} />
              </div>
            </div>
            <p className="text-gray-700 text-lg font-medium mb-2">How smooth are you really?</p>
            <p className="text-gray-500 text-sm">Real social skills test ✨</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Pick Your Age</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {ageGroups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => handleAgeSelect(group.id)}
                  className="group p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-white">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{group.emoji}</div>
                    <div className="font-bold text-lg">{group.label}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full">
              <Heart className="text-teal-500" size={16} />
              <span className="text-gray-600 text-sm font-medium">Share with your squad after 📱</span>
              <Heart className="text-cyan-500" size={16} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-cyan-900 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          
          <div className="mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full">
                <Target className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Choose Your Level
              </h1>
            </div>
            <p className="text-gray-700 mb-3">How challenging do you want this?</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full text-sm text-gray-600 font-medium">
              Age: {ageGroups.find(g => g.id === selectedAge)?.label} {ageGroups.find(g => g.id === selectedAge)?.emoji}
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            {difficultyModes.map((mode) => {
              const IconComponent = mode.icon;
              return (
                <button
                  key={mode.id}
                  onClick={() => handleModeSelect(mode.id)}
                  className="group w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{mode.emoji}</span>
                      <IconComponent className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
                    </div>
                    <div className="text-left text-white">
                      <div className="font-bold text-lg">{mode.label}</div>
                      <div className="text-white/90 text-sm">{mode.description}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          <button 
            onClick={() => setSelectedAge(null)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 hover:text-gray-700 text-sm font-medium transition-all duration-300"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    const rizzResult = getRizzLevel();
    const questions = getQuestions(selectedAge, selectedMode);
    const selectedAgeGroup = ageGroups.find(g => g.id === selectedAge);
    const selectedModeInfo = difficultyModes.find(m => m.id === selectedMode);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-cyan-900 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          
          <div className="mb-8">
          <div className="text-7xl mb-6 animate-bounce">{rizzResult.emoji}</div>
           <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Level:</h2>
           <div className={`text-2xl font-bold bg-gradient-to-r ${rizzResult.color} bg-clip-text text-transparent mb-4`}>
             {rizzResult.level}
           </div>
           <p className="text-gray-600 text-lg leading-relaxed mb-6">{rizzResult.description}</p>
           
           {rizzResult.levelUp && (
             <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-4 mb-6">
               <div className="flex items-center justify-center gap-2 mb-2">
                 <span className="text-2xl">⚡</span>
                 <span className="font-bold text-orange-700">Level Up Needed!</span>
                 <span className="text-2xl">🚀</span>
               </div>
               <p className="text-orange-600 text-sm font-medium">Practice your social skills and try again to unlock your potential!</p>
             </div>
           )}
           
           <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-4 mb-6">
             <div className="text-sm text-teal-700 font-medium mb-2">
               {selectedAgeGroup?.label} • {selectedModeInfo?.label} Mode
             </div>
             <div className="flex justify-center items-center gap-3">
               <span className="text-xl font-bold text-teal-800">{score}/{questions.length * 4}</span>
               <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => (
                   <Star 
                     key={i} 
                     className={`${i < Math.ceil(score / (questions.length * 4 / 5)) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                     size={20} 
                   />
                 ))}
               </div>
             </div>
           </div>
         </div>
         
         <div className="space-y-3 mb-6">
           <button 
             onClick={resetQuiz}
             className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group"
           >
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <span className="relative">Test Again 🔄</span>
           </button>
           
           {rizzResult.levelUp && (
             <button 
               onClick={() => handleModeSelect(selectedMode)}
               className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group"
             >
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <span className="relative">⚡ Level Up Challenge ⚡</span>
             </button>
           )}
         </div>
         
         <div className="text-gray-500 text-sm">
           <p className="font-medium">Share your results 📱</p>
           <p className="mt-1">#RizzCheck #SocialSkills</p>
         </div>
       </div>
     </div>
   );
 }

 const questions = getQuestions(selectedAge, selectedMode);
 const selectedAgeGroup = ageGroups.find(g => g.id === selectedAge);
 const selectedModeInfo = difficultyModes.find(m => m.id === selectedMode);

 return (
   <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-cyan-900 flex items-center justify-center p-4">
     <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
       
       <div className="mb-6 text-center">
         <div className="flex justify-center items-center gap-3 mb-4">
           <div className="p-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full">
             <Flame className="text-white" size={24} />
           </div>
           <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
             Rizz Check
           </h1>
         </div>
         <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full text-sm text-teal-700 font-medium">
           {selectedAgeGroup?.label} • {selectedModeInfo?.label} {selectedModeInfo?.emoji}
         </div>
       </div>
       
       <div className="mb-8">
         <div className="flex justify-between items-center mb-4">
           <span className="text-sm font-medium text-gray-600">{currentQuestion + 1} of {questions.length}</span>
           <div className="flex gap-1">
             {questions.map((_, i) => (
               <div 
                 key={i} 
                 className={`w-2 h-2 rounded-full transition-all duration-300 ${i <= currentQuestion ? 'bg-teal-500' : 'bg-gray-300'}`}
               />
             ))}
           </div>
         </div>
         
         <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
           <div 
             className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500 ease-out"
             style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
           />
         </div>
       </div>
       
       <div className="mb-8">
         <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-tight">
           {questions[currentQuestion]?.question}
         </h2>
         
         <div className="space-y-3">
           {questions[currentQuestion]?.options.map((option, index) => (
             <button
               key={index}
               onClick={() => handleAnswer(option.points)}
               className="group w-full p-4 text-left bg-gradient-to-r from-gray-50 to-gray-100 hover:from-teal-50 hover:to-cyan-50 rounded-xl border-2 border-transparent hover:border-teal-200 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg relative overflow-hidden"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <span className="relative font-medium text-gray-800 group-hover:text-gray-900">{option.text}</span>
             </button>
           ))}
         </div>
       </div>
       
       <div className="text-center">
         <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
           <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
           <span>Keep it real</span>
           <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
         </div>
       </div>
     </div>
   </div>
 );
}