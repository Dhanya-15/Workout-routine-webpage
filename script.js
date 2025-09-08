const dayData = {
  1: {
    workout: [
      { 
        name: "March in Place", 
        desc: "Low-impact cardio for 2 min.", 
        img: "images/march.jpg",
        howTo: [
          "Stand straight with feet hip-width apart.",
          "Lift your knees to a comfortable height.",
          "Swing your arms naturally.",
          "Keep your core tight.",
          "Breathe steadily."
        ]
      },
      { 
        name: "Dumbbell Overhead Press", 
        desc: "Press dumbbells overhead 12 reps.", 
        img: "images/overhead_press.jpg",
        howTo: [
          "Stand with feet shoulder-width apart.",
          "Hold dumbbells at shoulder height, palms forward.",
          "Press dumbbells overhead until arms fully extended.",
          "Lower slowly to shoulders.",
          "Keep your back straight and core engaged."
        ]
      },
      { 
        name: "Dumbbell Rows", 
        desc: "Pull dumbbells to chest 12 reps.", 
        img: "images/dumbbell_rows.jpg",
        howTo: [
          "Hold dumbbells in each hand.",
          "Bend slightly at waist, keep back straight.",
          "Pull dumbbells towards waist.",
          "Squeeze shoulder blades together.",
          "Lower slowly, avoid rounding back."
        ]
      },
      { 
        name: "Glute Bridges", 
        desc: "Lift hips with dumbbell on hips 15 reps.", 
        img: "images/glute_bridge.jpg",
        howTo: [
          "Lie on back, knees bent, feet hip-width apart.",
          "Place dumbbell on hips.",
          "Lift hips until knees, hips, shoulders align.",
          "Squeeze glutes at top.",
          "Lower slowly without touching floor."
        ]
      },
      { 
        name: "Standing Side Leg Lifts", 
        desc: "Lift each leg sideways 12 reps.", 
        img: "images/side_leg_lift.jpg",
        howTo: [
          "Stand straight, hold chair for balance.",
          "Lift one leg sideways slowly.",
          "Keep toes forward, back straight.",
          "Lower slowly and repeat other leg."
        ]
      },
      { 
        name: "Bicep Curls", 
        desc: "Curl dumbbells 12 reps while seated or standing.", 
        img: "images/bicep_curl.jpg",
        howTo: [
          "Sit on chair, feet flat.",
          "Hold dumbbells with palms facing up.",
          "Curl dumbbells to shoulders.",
          "Lower slowly, keep elbows stationary."
        ]
      }
    ],
    yoga: [
      { 
        name: "Sun Salutations", 
        desc: "Flow 3 rounds of gentle sun salutation.", 
        img: "images/sun_salutation.jpg",
        howTo: [
          "Start standing, hands in prayer.",
          "Inhale, raise arms overhead, look up.",
          "Exhale, fold forward, touch toes.",
          "Inhale, lift chest halfway.",
          "Exhale, step back to plank, lower to cobra/chaturanga.",
          "Exhale, push back to downward dog, hold 3 breaths.",
          "Step forward, inhale, lift chest halfway.",
          "Exhale, fold, rise to standing, hands overhead, exhale hands to prayer."
        ]
      },
      { 
        name: "Cat-Cow", 
        desc: "Alternate spine arch and rounding 2 min.", 
        img: "images/cat_cow.jpg",
        howTo: [
          "Get on all fours, wrists under shoulders, knees under hips.",
          "Inhale, arch back (cow), lift head and tailbone.",
          "Exhale, round back (cat), tuck chin and tailbone.",
          "Repeat slowly for 2 min."
        ]
      },
      { 
        name: "Seated Spinal Twist", 
        desc: "Twist torso gently 1 min each side.", 
        img: "images/spinal_twist.jpg",
        howTo: [
          "Sit cross-legged or on chair.",
          "Place right hand on left knee, left hand behind you.",
          "Twist torso to left, hold 30 sec.",
          "Switch sides."
        ]
      },
      { 
        name: "Legs Up the Wall", 
        desc: "Lie with legs up the wall 5 min.", 
        img: "images/legs_wall.jpg",
        howTo: [
          "Sit next to wall, lie back, swing legs up.",
          "Keep back and shoulders on floor.",
          "Relax arms by side, breathe slowly.",
          "Hold for 5 minutes."
        ]
      },
      { 
        name: "Face Wokout", 
        link: "https://www.youtube.com/watch?v=d5lk-pqIaSw"
      }
    ]
  },

  2: {
    workout: [
      { name: "Dumbbell Chest Press", 
        desc: "Press dumbbells while lying down 12 reps.", 
        img: "images/chest_press.jpg",
        howTo: [
          "Lie on back, knees bent.",
          "Hold dumbbells at chest height.",
          "Press dumbbells upward until arms extended.",
          "Lower slowly to chest."
        ]},
      { name: "Dumbbell Side Raises", 
        desc: "Raise dumbbells sideways 12 reps.", 
        img: "images/side_raise.jpg",
        howTo: [
          "Stand straight, feet hip-width.",
          "Hold dumbbells by sides.",
          "Lift arms sideways to shoulder height.",
          "Lower slowly, keep core tight."
        ]},
      { name: "Dumbbell Overhead Press", 
        desc: "Press dumbbells overhead 12 reps.", 
        img: "images/overhead_press.jpg",
        howTo: [
          "Stand tall, feet shoulder-width.",
          "Hold dumbbells at shoulders.",
          "Press overhead fully extended.",
          "Lower slowly, keep back straight."
        ]},
      { name: "Seated Bicep Curls", 
        desc: "Curl dumbbells while seated 12 reps.", 
        img: "images/bicep_curl.jpg",
        howTo: [
          "Sit, feet flat, dumbbells palms up.",
          "Curl to shoulders slowly.",
          "Lower slowly, elbows stationary."
        ]}
    ],
    yoga: [
      { name: "Sun Salutations", 
        desc: "Flow 3 rounds gentle sun salutation.", 
        img: "images/sun_salutation.jpg",
        howTo: [
          "Start standing, hands in prayer.",
          "Inhale, raise arms overhead, look up.",
          "Exhale, fold forward, touch toes.",
          "Inhale, lift chest halfway.",
          "Exhale, step back to plank, lower to cobra/chaturanga.",
          "Exhale, push back to downward dog, hold 3 breaths.",
          "Step forward, inhale, lift chest halfway.",
          "Exhale, fold, rise to standing, hands overhead, exhale hands to prayer."]},
      { name: "Bridge Pose", 
        desc: "Lie down, lift hips, hold 30 sec × 2.", 
        img: "images/bridge_pose.jpg",
        howTo: [
          "Lie on back, knees bent, feet hip-width.",
          "Lift hips, squeeze glutes.",
          "Keep knees aligned, hold 30 sec."
        ]},
      { name: "Shoulder Stretch", 
        desc: "Stretch shoulders against wall 2 min.", 
        img: "images/shoulder_stretch.jpg",
        howTo: [
          "Stand facing wall, place hands on wall.",
          "Lean forward gently, stretch shoulders.",
          "Hold 2 min, breathe deeply."
        ]},
      { name: "Child's Pose", 
        desc: "Relax in child's pose 3 min.", 
        img: "images/child_pose.jpg",
        howTo: [
          "Kneel on mat, sit on heels.",
          "Bend forward, stretch arms ahead.",
          "Forehead on mat, breathe deeply for 3 min."
        ]},
      { name: "Face Workout", 
        link: "https://www.youtube.com/watch?v=ZFEj0cWxw08"
      }
    ]
  },

  3: {
    workout: [
      { name: "Glute Bridges with Dumbbell", 
        desc: "Lift hips 15 reps.", 
        img: "images/glute_bridge.jpg",
        howTo: [
          "Lie on back, knees bent, feet hip-width.",
          "Place dumbbell on hips.",
          "Lift hips, squeeze glutes, lower slowly."
        ]},
      { name: "Standing Kickbacks", 
        desc: "12 reps per leg.", 
        img: "images/kickbacks.jpg",
        howTo: [
          "Stand straight, hold chair for balance.",
          "Kick one leg backward slowly, squeeze glutes.",
          "Lower leg and repeat other side."
        ]},
      { name: "Side-Lying Leg Lifts", 
        desc: "12 reps per side.", 
        img: "images/side_leg_lift.jpg",
        howTo: [
          "Lie on side, body straight.",
          "Lift top leg slowly, keep toes forward.",
          "Lower slowly, repeat other side."
        ]},
      { name: "Hip Abductions", 
        desc: "12 reps per side.", 
        img: "images/hip_abduction.jpg",
        howTo: [
          "Stand or lie on side.",
          "Lift leg sideways slowly.",
          "Keep back straight, return slowly."
        ]},
      { name: "Calf Raises", 
        desc: "20 reps.", 
        img: "images/calf_raise.jpg",
        howTo: [
          "Stand straight, feet hip-width.",
          "Lift heels, balance on toes.",
          "Lower slowly, repeat 20 times."
        ]}  
    ],
    yoga: [
      { name: "Sun Salutations", 
        desc: "Flow 3 rounds gentle sun salutation.", 
        img: "images/sun_salutation.jpg",
        howTo: [
          "Start standing, hands in prayer.",
          "Inhale, raise arms overhead, look up.",
          "Exhale, fold forward, touch toes.",
          "Inhale, lift chest halfway.",
          "Exhale, step back to plank, lower to cobra/chaturanga.",
          "Exhale, push back to downward dog, hold 3 breaths.",
          "Step forward, inhale, lift chest halfway.",
          "Exhale, fold, rise to standing, hands overhead, exhale hands to prayer."]},
      { name: "Butterfly Pose", 
        desc: "Sit, bring soles together 2 min.", 
        img: "images/butterfly_pose.jpg",
        howTo: [
          "Sit, bring soles together.",
          "Hold feet with hands, knees drop sideways.",
          "Breathe deeply 2 min."
        ]},
      { name: "Seated Forward Bend", 
        desc: "Reach forward 2 min.", 
        img: "images/forward_bend.jpg",
        howTo: [
          "Sit legs extended.",
          "Bend forward, reach feet or ankles.",
          "Hold 2 min, relax back."
        ]},
      { name: "Legs Up the Wall Pose", 
        desc: "Lie with legs up 5 min.", 
        img: "images/legs_wall.jpg",
        howTo: [
          "Sit next to wall, lie back, swing legs up.",
          "Keep back and shoulders on floor.",
          "Relax arms by side, breathe slowly.",
          "Hold for 5 minutes."]},
      { name: "Face Workout", 
        link: "https://www.youtube.com/watch?v=ZFEj0cWxw08"
      }
    ]
  },

  4: {
  workout: [
    {   name: "Russian Twists", 
        desc: "Sit, twist torso side to side 20 reps.", 
        img: "images/russian_twist.jpg",
        howTo: [
        "Sit on mat, knees bent, feet flat.",
        "Lean back slightly, keep back straight.",
        "Hold hands together, twist torso to right, then left.",
        "Breathe steadily, engage core."
      ]},
    {   name: "Seated Knee Lifts", 
        desc: "Lift knees towards chest while seated 15 reps.", 
        img: "images/knee_lifts.jpg",
        howTo: [
        "Sit on chair or mat, back straight.",
        "Lift one knee at a time toward chest.",
        "Lower slowly, repeat with other leg.",
        "Keep core engaged."
      ]},
    {   name: "Plank Hold", 
        desc: "Hold plank position 30 sec.", 
        img: "images/plank.jpg",
        howTo: [
        "Lie face down, forearms on mat.",
        "Lift body, forming straight line from head to heels.",
        "Keep abs tight, avoid sagging hips.",
        "Hold 30 sec, breathe steadily."
      ]},
    {   name: "Dumbbell Side Bends", 
        desc: "Stand, bend sideways 12 reps per side.", 
        img: "images/side_bend.jpg",
        howTo: [
        "Stand straight, feet shoulder-width.",
        "Hold dumbbell in one hand, other on waist.",
        "Bend sideways slowly toward dumbbell.",
        "Return to upright, repeat other side."
      ]}
  ],
  yoga: [
    {   name: "Sun Salutations", 
        desc: "Flow 3 rounds.", 
        img: "images/sun_salutation.jpg",
        howTo: [
          "Start standing, hands in prayer.",
          "Inhale, raise arms overhead, look up.",
          "Exhale, fold forward, touch toes.",
          "Inhale, lift chest halfway.",
          "Exhale, step back to plank, lower to cobra/chaturanga.",
          "Exhale, push back to downward dog, hold 3 breaths.",
          "Step forward, inhale, lift chest halfway.",
          "Exhale, fold, rise to standing, hands overhead, exhale hands to prayer."]},
    {   name: "Cat-Cow", 
        desc: "Alternate spine arch and rounding 2 min.", 
        img: "images/cat_cow.jpg",
        howTo: [
          "Get on all fours, wrists under shoulders, knees under hips.",
          "Inhale, arch back (cow), lift head and tailbone.",
          "Exhale, round back (cat), tuck chin and tailbone.",
          "Repeat slowly for 2 min."]},
    {   name: "Seated Spinal Twist", 
        desc: "Twist torso gently 1 min each side.", 
        img: "images/spinal_twist.jpg",
        howTo: [
          "Sit cross-legged or on chair.",
          "Place right hand on left knee, left hand behind you.",
          "Twist torso to left, hold 30 sec.",
          "Switch sides."]},
    {   name: "Bridge Pose", 
        desc: "Lift hips 2 min.", 
        img: "images/bridge_pose.jpg",
        howTo: [
          "Lie on back, knees bent, feet hip-width.",
          "Lift hips, squeeze glutes.",
          "Keep knees aligned, hold 30 sec."]},
    {   name: "Legs Up the Wall", 
        desc: "Lie with legs up 5 min.", 
        img: "images/legs_wall.jpg",
        howTo: [
          "Sit next to wall, lie back, swing legs up.",
          "Keep back and shoulders on floor.",
          "Relax arms by side, breathe slowly.",
          "Hold for 5 minutes."]},
    { 
        name: "Face Workout", 
        link: "https://www.youtube.com/watch?v=d5lk-pqIaSw"
      }
      
  ]
},

5: {
  workout: [
    {   name: "Dumbbell Rows", 
        desc: "Pull dumbbells to chest 12 reps.", 
        img: "images/dumbbell_rows.jpg",
        howTo: [
        "Hold dumbbells in each hand.",
        "Bend slightly at waist, back straight.",
        "Pull dumbbells toward waist, squeeze shoulder blades.",
        "Lower slowly."
      ]},
    {   name: "Reverse Fly with Dumbbells", 
        desc: "Lift dumbbells sideways 12 reps.", 
        img: "images/reverse_fly.jpg",
        howTo: [
        "Stand, bend forward slightly, back straight.",
        "Hold dumbbells under chest.",
        "Lift arms sideways to shoulder height.",
        "Lower slowly, control movement."
      ]},
    {   name: "Superman Hold", 
        desc: "Lie face down, lift arms & legs 20 sec × 2.", 
        img: "images/superman.jpg",
        howTo: [
        "Lie face down, arms forward, legs straight.",
        "Lift arms, chest, and legs off floor.",
        "Hold 20 sec, lower slowly.",
        "Keep neck neutral."
      ]},
    {   name: "Cat-Cow", 
        desc: "Alternate spine arch/round 2 min.", 
        img: "images/cat_cow.jpg",
        howTo: [
          "Get on all fours, wrists under shoulders, knees under hips.",
          "Inhale, arch back (cow), lift head and tailbone.",
          "Exhale, round back (cat), tuck chin and tailbone.",
          "Repeat slowly for 2 min."]}
  ],
  yoga: [
    {   name: "Sun Salutations", 
        desc: "Flow 3 rounds.", 
        img: "images/sun_salutation.jpg",
        howTo: [
          "Start standing, hands in prayer.",
          "Inhale, raise arms overhead, look up.",
          "Exhale, fold forward, touch toes.",
          "Inhale, lift chest halfway.",
          "Exhale, step back to plank, lower to cobra/chaturanga.",
          "Exhale, push back to downward dog, hold 3 breaths.",
          "Step forward, inhale, lift chest halfway.",
          "Exhale, fold, rise to standing, hands overhead, exhale hands to prayer."]},
    {   name: "Child's Pose", 
        desc: "Relax 3 min.", 
        img: "images/child_pose.jpg",
        howTo: [
          "Kneel on mat, sit on heels.",
          "Bend forward, stretch arms ahead.",
          "Forehead on mat, breathe deeply for 3 min."]},
    {   name: "Seated Forward Bend", 
        desc: "Reach forward 2 min.", 
        img: "images/forward_bend.jpg",
        howTo: [
          "Sit legs extended.",
          "Bend forward, reach feet or ankles.",
          "Hold 2 min, relax back."]},
    {   name: "Bridge Pose", 
        desc: "Lift hips 2 min.", 
        img: "images/bridge_pose.jpg",
        howTo: [
          "Lie on back, knees bent, feet hip-width.",
          "Lift hips, squeeze glutes.",
          "Keep knees aligned, hold 30 sec."]},
    {   name: "Legs Up the Wall", 
        desc: "Lie with legs up 5 min.", 
        img: "images/legs_wall.jpg",
        howTo: [
          "Sit next to wall, lie back, swing legs up.",
          "Keep back and shoulders on floor.",
          "Relax arms by side, breathe slowly.",
          "Hold for 5 minutes."]},
    { 
        name: "Chin Lifts", 
        link: "https://www.youtube.com/watch?v=d5lk-pqIaSw"
      }
  ]
},

6: {
  workout: [
    {   name: "Gentle Walking in Place", 
        desc: "Light walking for 5 min.", 
        img: "images/walking.jpg",
        howTo: [
        "Stand tall, feet hip-width apart.",
        "March slowly in place.",
        "Swing arms gently.",
        "Breathe deeply and steadily."
      ]},
    {   name: "Shoulder Rolls", 
        desc: "Roll shoulders forward/back 2 min.", 
        img: "images/shoulder_roll.jpg",
        howTo: [
        "Stand or sit tall.",
        "Roll shoulders forward slowly 10 times.",
        "Roll shoulders backward slowly 10 times."
      ]},
    {   name: "Neck Stretches", 
        desc: "Gently stretch neck 2 min.", 
        img: "images/neck_stretch.jpg",
        howTo: [
        "Sit/stand tall.",
        "Tilt head to right, hold 10 sec.",
        "Tilt head to left, hold 10 sec.",
        "Look down/up gently, hold 10 sec each."
      ]}
  ],
  yoga: [
    {   name: "Sun Salutations", 
        desc: "Flow 2 rounds.", 
        img: "images/sun_salutation.jpg",
        howTo: [
          "Start standing, hands in prayer.",
          "Inhale, raise arms overhead, look up.",
          "Exhale, fold forward, touch toes.",
          "Inhale, lift chest halfway.",
          "Exhale, step back to plank, lower to cobra/chaturanga.",
          "Exhale, push back to downward dog, hold 3 breaths.",
          "Step forward, inhale, lift chest halfway.",
          "Exhale, fold, rise to standing, hands overhead, exhale hands to prayer."]},
    {   name: "Legs Up the Wall", 
        desc: "Lie with legs up 5 min.", 
        img: "images/legs_wall.jpg",
        howTo: [
          "Sit next to wall, lie back, swing legs up.",
          "Keep back and shoulders on floor.",
          "Relax arms by side, breathe slowly.",
          "Hold for 5 minutes."]},
    {   name: "Butterfly Pose", 
        desc: "Sit, soles together 3 min.", 
        img: "images/butterfly_pose.jpg",
        howTo: [
          "Sit, bring soles together.",
          "Hold feet with hands, knees drop sideways.",
          "Breathe deeply 2 min."]},
    {   name: "Seated Forward Bend", 
        desc: "Reach forward 3 min.", 
        img: "images/forward_bend.jpg",
        howTo: [
          "Sit legs extended.",
          "Bend forward, reach feet or ankles.",
          "Hold 2 min, relax back."]},
    {   name: "Deep Breathing & Meditation", 
        desc: "Focus on slow breaths 10 min.", 
        img: "images/meditation.jpg",
        howTo: [
        "Sit comfortably, back straight.",
        "Close eyes, inhale slowly through nose.",
        "Exhale slowly through mouth.",
        "Repeat 10 min, focus on breath only."
      ]},
     { name: "Face Workout", 
        link: "https://www.youtube.com/watch?v=ZFEj0cWxw08"
      }
  ]
},

7: {
  workout: [
    {   name: "March in Place", 
        desc: "Low-impact cardio 2 min.", 
        img: "images/march.jpg",
        howTo: [
        "Stand tall, feet hip-width apart.",
        "Lift knees to comfortable height.",
        "Swing arms naturally.",
        "Keep core tight, breathe steadily."
      ]},
    {   name: "Dumbbell Overhead Press", 
        desc: "Press dumbbells overhead 12 reps.", 
        img: "images/overhead_press.jpg",
        howTo: [
          "Stand with feet shoulder-width apart.",
          "Hold dumbbells at shoulder height, palms forward.",
          "Press dumbbells overhead until arms fully extended.",
          "Lower slowly to shoulders.",
          "Keep your back straight and core engaged."]},
    {   name: "Glute Bridges", 
        desc: "Lift hips 15 reps.", 
        img: "images/glute_bridge.jpg",
        howTo: [
          "Lie on back, knees bent, feet hip-width apart.",
          "Place dumbbell on hips.",
          "Lift hips until knees, hips, shoulders align.",
          "Squeeze glutes at top.",
          "Lower slowly without touching floor."]},
    {   name: "Standing Side Leg Lifts", 
        desc: "12 reps each side.", 
        img: "images/side_leg_lift.jpg",
        howTo: [
          "Stand straight, hold chair for balance.",
          "Lift one leg sideways slowly.",
          "Keep toes forward, back straight.",
          "Lower slowly and repeat other leg."]},
    {   name: "Dumbbell Rows", 
        desc: "Pull dumbbells to chest 12 reps.", 
        img: "images/dumbbell_rows.jpg",
        howTo: [
          "Hold dumbbells in each hand.",
          "Bend slightly at waist, keep back straight.",
          "Pull dumbbells towards waist.",
          "Squeeze shoulder blades together.",
          "Lower slowly, avoid rounding back."]}
  ],
  yoga: [
    {   name: "Sun Salutations", 
        desc: "Flow 3 rounds.", 
        img: "images/sun_salutation.jpg",
        howTo: [
          "Start standing, hands in prayer.",
          "Inhale, raise arms overhead, look up.",
          "Exhale, fold forward, touch toes.",
          "Inhale, lift chest halfway.",
          "Exhale, step back to plank, lower to cobra/chaturanga.",
          "Exhale, push back to downward dog, hold 3 breaths.",
          "Step forward, inhale, lift chest halfway.",
          "Exhale, fold, rise to standing, hands overhead, exhale hands to prayer."]},
    {   name: "Cat-Cow", 
        desc: "2 min", 
        img: "images/cat_cow.jpg",
        howTo: [ 
          "Get on all fours, wrists under shoulders, knees under hips.",
          "Inhale, arch back (cow), lift head and tailbone.",
          "Exhale, round back (cat), tuck chin and tailbone.",
          "Repeat slowly for 2 min."]},
    {   name: "Seated Spinal Twist", 
        desc: "1 min each side", 
        img: "images/spinal_twist.jpg",
        howTo: [
          "Sit cross-legged or on chair.",
          "Place right hand on left knee, left hand behind you.",
          "Twist torso to left, hold 30 sec.",
          "Switch sides."]},
    {   name: "Bridge Pose", 
        desc: "Lift hips 2 min.", 
        img: "images/bridge_pose.jpg",
        howTo: [ 
          "Lie on back, knees bent, feet hip-width.",
          "Lift hips, squeeze glutes.",
          "Keep knees aligned, hold 30 sec."]},
    {   name: "Legs Up the Wall", 
        desc: "Lie with legs up 5 min.", 
        img: "images/legs_wall.jpg",
        howTo: [
          "Sit next to wall, lie back, swing legs up.",
          "Keep back and shoulders on floor.",
          "Relax arms by side, breathe slowly.",
          "Hold for 5 minutes."]},
     { name: "Face Workout", 
        link: "https://www.youtube.com/watch?v=9wmASBCZppY"
      }
  ]
}
}

// DOM Elements
// Select day cards and details container
const dayItems = document.querySelectorAll('.day-card');
const dayDetails = document.getElementById('dayDetails');

// Event listener for each day card
dayItems.forEach(item => {
  item.addEventListener('click', () => {
    showDay(item.dataset.day);

    // Set active class
    dayItems.forEach(c => c.classList.remove('active'));
    item.classList.add('active');

    // 🔽 Smooth scroll to details section
    dayDetails.scrollIntoView({ behavior: "smooth" });
  });
});

// Show workouts & yoga list for selected day
function showDay(dayNum) {
  const data = dayData[dayNum];
  if (!data) return;

  let html = `<h2>Day ${dayNum}</h2>`;

  // Workout list
  html += `<h3>Workout</h3><ul class="exercise-list">`;
  data.workout.forEach((ex, index) => {
    html += `<li onclick="showDetail('workout', ${dayNum}, ${index})">${ex.name}</li>`;
  });
  html += `</ul>`;

  // Yoga list
  html += `<h3>Yoga</h3><ul class="exercise-list">`;
  data.yoga.forEach((ex, index) => {
    html += `<li onclick="showDetail('yoga', ${dayNum}, ${index})">${ex.name}</li>`;
  });
  html += `</ul>`;

  dayDetails.innerHTML = html;
}

// Show clicked exercise/yoga details inline
let timerInterval;
let remainingTime = 0;
let originalTime = 0; // store the initial time
let isPaused = false;

function showDetail(type, dayNum, index) {
  const ex = dayData[dayNum][type][index];
  const detailContainer = document.getElementById("exerciseDetail");

  if (ex.link) {
    window.open(ex.link, "_blank");
    return;
  }

  let html = `
    <div class="exercise-detail-card">
      <span class="close-detail" onclick="closeDetail()">&times;</span>
      <h2>${ex.name}</h2>
      <img src="${ex.img}" alt="${ex.name}" style="max-width:100%;border-radius:10px;">
      <p>${ex.desc}</p>
  `;

  // Detect time in desc
  let timeMatch = ex.desc.match(/(\d+)\s*(min|sec)/i);
  if (timeMatch) {
    let timeValue = parseInt(timeMatch[1]);
    let timeUnit = timeMatch[2].toLowerCase();

    remainingTime = (timeUnit === "min") ? timeValue * 60 : timeValue;
    originalTime = remainingTime; // store original time
    isPaused = false;

    html += `
      <div style="margin-top:15px;">
        <h3>Timer: <span id="timerDisplay">${formatTime(remainingTime)}</span></h3>
        <button onclick="startTimer()">Start</button>
        <button onclick="pauseTimer()">Pause</button>
        <button onclick="resetTimer()">Reset</button>
      </div>
    `;
  }

  if (ex.howTo && ex.howTo.length > 0) {
    html += "<h3>How to do:</h3><ol>";
    ex.howTo.forEach(step => {
      html += `<li>${step}</li>`;
    });
    html += "</ol>";
  }

  html += "</div>";

  detailContainer.innerHTML = html;
  detailContainer.style.display = "block";

  clearInterval(timerInterval);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  isPaused = false;
  timerInterval = setInterval(() => {
    if (!isPaused && remainingTime > 0) {
      remainingTime--;
      document.getElementById("timerDisplay").innerText = formatTime(remainingTime);
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  remainingTime = originalTime; // reset to original
  document.getElementById("timerDisplay").innerText = formatTime(remainingTime);
  isPaused = false;
}


function closeDetail() {
  document.getElementById("exerciseDetail").style.display = "none";
}


