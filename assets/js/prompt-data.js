// Prompt data for detail pages
const promptData = {
    "1.jpg": {
        title: "Moody Dual-Tone Cinematic Profile Shot",
        description: "A dramatic, film-inspired profile portrait illuminated by deep red and cool cyan dual-tone lighting. The subject sits thoughtfully on a couch, with reflective sunglasses catching the ambient glow. The atmosphere is moody, intimate, and professionally styled with DSLR-like sharpness and subtle film grain.",
        image: "assets/images/1.jpg",
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        tags: "cinematic portrait, dual-tone lighting, moody atmosphere, reflective sunglasses, dramatic profile",
        likes: 202,
        date: "October 2, 2025",
        prompt: "A cinematic, high-resolution photograph of a man in profile, wearing round-framed sunglasses with reflective lenses that catch the ambient glow. He is seated on a soft couch, his head slightly tilted upward, lost in thought or contemplation. His short, tousled dark hair is subtly lit by dramatic lighting, with a few strands catching the highlights. He wears a relaxed, textured crew-neck shirt in neutral tones, softly draped over his shoulders. The scene is bathed in moody, atmospheric dual-tone lighting - deep crimson red from one side, cool cyan-blue from the other casting rich shadows and sharp highlights across his jawline, cheekbones, and clothing. The background is dimly lit and artistically blurred, suggesting an intimate, enclosed space like a lounge or private studio. The composition is tight yet cinematic, using a shallow depth of field to isolate the subject. The image mimics a professional DSLR photograph captured in low-light conditions, with filmic grain, precise focus 0"
    },
    "2.jpg": {
        title: "Golden-Ambience Fashion Beauty Portrait",
        description: "A high-fashion close-up portrait featuring a woman in dramatic golden lighting. With gradient amber sunglasses, flowing raven hair, and rich warm tones, the scene blends elegance, confidence, and cinematic beauty. Sculptural shadows, luxurious styling, and a golden-amber backdrop create a refined and aspirational aesthetic.",
        image: "assets/images/2.jpg",
        category: "Portrait",
        tags: "fashion portrait, golden tones, beauty shot, amber lighting, elegant, cinematic, warm aesthetic",
        likes: 186,
        date: "October 2, 2025",
        prompt: "Edit this image to show a woman positioned in a close-up portrait shot, face tilted slightly upward at approximately 15–20 degrees with her chin gently lifted, creating a confident, aspirational angle. Her head is centered in the frame with her gaze directed straight toward the camera from behind the sunglasses. She has long, flowing raven-black hair with subtle midnight-blue highlights cascading down both sides of her face and over her shoulders, with strands naturally falling across her upper torso. She’s wearing oversized vintage-inspired cat-eye sunglasses with molten amber-to-gold gradient lenses and lustrous golden frames with delicate etched details, positioned perfectly on the bridge of her nose. Her body is angled slightly (about 30 degrees) to create dimension, with shoulders relaxed and one shoulder subtly closer to the camera. She exudes magnetic confidence with a sultry pout featuring rich burnt-sienna matte lipstick with a subtle glossy center, and dramatic smoky eye makeup with bronze and copper tones visible around the sunglasses. She’s dressed in a luxurious black silk blazer with peak lapels, fully closed at the front for modest coverage, paired with a whisper-thin gold chain necklace featuring a small crescent moon pendant resting at her collarbone, along with sleek gold huggie earrings. The background is a rich, saturated golden-yellow that transitions to deeper amber tones at the edges. Dramatic directional lighting from above-left creates sculptural shadows along her neck and cheekbones, with warm backlighting creating a subtle halo effect. The composition is in a beauty/fashion portrait style with the face taking up roughly 60% of the frame."
    },
    "3.jpg": {
        title: "Minimalist Monochrome Studio Portrait",
        description: "A clean, modern portrait featuring a man seated in a monochromatic studio setup. Soft, even lighting and a seamless color-matched environment create a polished high-fashion aesthetic. The composition emphasizes simplicity, structure, and refined contemporary style.",
        image: "assets/images/3.jpg",
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        tags: "minimalist portrait, monochrome studio, modern fashion, clean aesthetic, soft lighting",
        likes: 176,
        date: "October 5, 2025",
        prompt: "Convert this image so that the man is sitting in the center of a high-back armchair in a minimal, monochromatic studio setting. Replace the current background with a seamless wall and floor in a single solid color, either deep teal, slate blue, or forest green. Dress him in a matching jacket and pants in the same color, paired with a simple white T-shirt underneath. Keep his sneakers clean and white with subtle accents matching the outfit. Retain his wristwatch as an accessory. His posture should be upright and composed, with both feet flat on the ground and his hands gently clasped in his lap. The chair should match the overall color scheme to create a seamless monochrome effect. Lighting should be soft, even, and studio-style, with minimal shadows. The final image should be ultra-high-resolution, sleek, modern, and minimalist, in the style of high-fashion portrait photography."
    },
    "4.jpg": {
        title: "Underwater Macro Portrait with Caustic Lighting",
        description: "A hyper-realistic macro portrait focusing on the left half of a face partially submerged underwater. Dynamic caustic reflections, suspended droplets, and ultra-detailed skin textures create a surreal, dreamlike atmosphere with dramatic underwater lighting.",
        image: "assets/images/4.jpg",
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        tags: "underwater portrait, macro photography, caustic lighting, hyper-realistic, surreal, photorealistic",
        likes: 22,
        date: "October 9, 2025",
        prompt: "Hyper-realistic, ultra-detailed macro portrait capturing only the left half of a human face partially submerged underwater. One eye in sharp focus near the far-left edge of the frame. Light rays create dynamic caustic reflections across the skin, emphasizing pores, wet lips, eyelashes, and fine textures with difelike subsurface scattering. Suspended droplets and air bubbles add depth and motion. Cinematic underwater lighting with soft shadows and crisp highlights enhances the surreal, dreamlike atmosphere. Extremely shallow depth of field, photorealistic rendering, 3:4 aspect ratio."
    },
    "5.jpg": {
        title: "Cinematic Multi-Exposure Fashion Portrait",
        description: "A dreamlike high-fashion portrait featuring layered motion blur, ghosted exposures, and a smooth azure-to-cyan gradient background. Cool blue lighting mixes with warm orange edge glow to create a surreal, modern editorial aesthetic.",
        image: "assets/images/5.jpg",
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        tags: "fashion portrait, multi-exposure, cinematic lighting, surreal, motion blur, editorial style",
        likes: 18,
        date: "October 10, 2025",
        prompt: "High-fashion cinematic half-length portrait of the person from input photo, dreamlike editorial style. Multi-exposure motion blur with ghosting and vertical streaks. Clean gradient background from deep azure (#0033A0) to cyan (#00CCFF). Subject in plain white oversized T-shirt with soft folds catching colored lights. Dramatic lighting: cool blue wash plus orange/yellow edge glow from camera-left/backlight. Expression neutral/introspective, eyes softly lit or shadowed. Shot on 50-85mm f/1.8, shallow depth, cinematic blur and chromatic separation. Crisp skin/fabric in focus, surreal minimal glitch-inspired fashion mood."
},

    "6.jpg": {
        title: "Soft Studio Birthday Portrait in Warm Tones",
        description: "A delicate photorealistic portrait of a young girl in a minimalist beige studio. Warm lighting, shallow depth of field, and soft shadows create an inviting and gentle atmosphere centered around a birthday theme with balloons and a cake.",
        image: "assets/images/6.jpg",
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        tags: "birthday portrait, soft lighting, warm tones, studio photography, photorealistic, child portrait",
        likes: 11,
        date: "November 20, 2025",
        prompt: "A portrait of a young girl standing next to a balloon and holding a cake with a candle, a medium-sized photo ave level the air is wearing a pink ские промт, оп her shoulders, white socks, pink sandals, a pearl headband, and a large pink balloon on a string. in the shape of a two with white bows, the location is a minimalist studio with a beige background, soft side lighting, soft shadows, and a warm and delicate atmosphere. The shot was taken with an 85mm lens and a shallow depth of field, and the style is photorealistic with a high resolution of 8K. The color palette is dominated by creamy beige and warm skin tones, with high detail and photorealism."
    },
    "7.jpg": {
        title: "Bold Urban Portrait Under Clear Blue Sky",
        description: "A striking outdoor urban portrait of a confident young woman framed by a vivid blue sky and a prominent red stop sign. Shot from a low wide-angle perspective, the image highlights her sharp features, bold accessories, and strong presence with crisp, natural lighting.",
        image: "assets/images/7.jpg",
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        tags: "urban portrait, bold style, wide-angle, outdoor photography, confident expression, vibrant colors",
        likes: 11,
        date: "November 15, 2025",
        prompt: "A realistic photo of a confident young woman standing outdoors under a bright blue sky, with a red 'STOP' sign clearly visible behind her. The camera angle is low and close-up, shot from slightly below eye level with a wide-angle lens, creating a bold and urban composition. She has straight, jet-black hair that frames her face sharply, smooth tan skin, and defined facial features with a confident, almost defiant expression. Her lips are full and slightly glossy, and her dark eyes are partially hidden behind narrow red-tinted sunglasses. She wears a white bandana tied around her forehead, large gold hoop earrings, and a sporty black jacket with colorful stripes on the shoulders. The lighting is natural and warm, emphasizing her features and the vivid tones of the environment. The background, including the stop sign, building, and sky, must remain sharp and detailed."
    },
    "8.jpg": {
        title: "Moody Mountain Outdoor Portrait",
        description: "A natural outdoor portrait set against misty mountain scenery, featuring soft diffused lighting and earthy tones. The subject stands in a relaxed pose with hands in pockets, captured from a low angle for a strong, grounded presence.",
        image: "assets/images/8.jpg",
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        tags: "outdoor portrait, moody atmosphere, mountains, earthy tones, natural lighting, relaxed pose",
        likes: 8,
        date: "November 18, 2025",
        prompt: "A portrait of me standing outdoors in a mountainous landscape with misty clouds in the background. I am standing slightly at an angle, with my body turned subtly to the side while my face remains directed toward the camera, giving a strong and calm presence. Both of my hands are casually resting inside the front pockets of my pants. My legs are relaxed and slightly apart, though not fully visible in the frame. I am wearing a loose, textured knit sweater in earthy brown, with long sleeves that extend to my wrists, slightly wrinkled around the elbows. The sweater has a round crew neckline. I am also wearing brown casual trousers, partially visible, with a relaxed fit that complements the natural, outdoors setting. My facial expression is neutral yet confident, as I look directly toward the camera. The image is captured from a low angle shot, making me appear taller and more dominant in the frame. The camera uses a portrait focal length around 85mm, giving a natural perspective with shallow depth of field. The lighting is soft and diffused, blending with the cloudy, moody atmosphere of the mountains behind me, enhancing the earthy and natural tones of the outfit and scenery."
    },
    "9.jpg": {
    title: "Minimalist Silhouette Portrait",
    description: "A striking minimalist portrait of a person in a cap and sunglasses, captured in silhouette against a bright background. The composition emphasizes mystery, clean lines, and dramatic contrast.",
    image: "assets/images/9.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "silhouette, minimalist, portrait, dramatic contrast, mysterious, clean composition",
    likes: 4,
    date: "October 20, 2025",
    prompt: "Silhouette of a person in a cap and sunglasses, looking upwards against a bright background, creating a mysterious and minimalist effect."
}
,
    "10.jpg": {
    title: "Magical Portrait with Floating Jellyfish",
    description: "A cinematic portrait of a young man interacting with a glowing blue jellyfish, captured with shallow depth of field. Dramatic blue and orange lighting enhances the magical and emotional atmosphere, while the soft bokeh background creates a surreal, immersive effect.",
    image: "assets/images/10.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "magical portrait, jellyfish, cinematic lighting, shallow depth, surreal, emotional atmosphere",
    likes: 4,
    date: "November 15, 2025",
    prompt: "16K ultra-realistic cinematic portrait of the same young man - keep his facial features and proportions exactly as in the reference image (do not change or alter the face). He is in a creative new pose, slightly leaning toward the camera with his hand raised forward as if offering something magical. The glowing blue jellyfish remains the same floating directly above his hand, casting a soft neon light on his face and clothing. The scene is captured with a wide-aperture cinematic lens (f/1.4) for a shallow depth of field, creating a beautifully blurred background with soft bokeh lights. Lighting is rich and dramatic, with blue and orange tones that evoke a magical and emotional atmosphere."
}
,
    "11.jpg": {
    title: "Minimalist Cinematic Black & White Portrait",
    description: "A photorealistic medium-long portrait of a young man in a relaxed, confident pose. Soft cinematic lighting highlights facial features, flowing hoodie folds, and subtle textures against a minimalist black and white background, creating a stylish and visually engaging composition.",
    image: "assets/images/11.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "cinematic portrait, black and white, minimalist, relaxed pose, photorealistic, stylish, soft lighting",
    likes: 2,
    date: "November 14, 2025",
    prompt: "Ultra-detailed cinematic medium-long portrait of a young man sitting on the floor in a relaxed and natural pose, legs slightly bent and casually positioned, against a minimalist black and white aesthetic background with soft gradients and subtle shadows, wearing an oversized black hoodie with flowing folds and white accents, aesthetic loose-fit black pants with natural draping and soft creases, stylish formal white sneakers, wavy hair styled naturally toward the left side of the face, face slightly turned and looking to the left with a calm, confident gaze, hand with fingers gently positioned just above the lips in a thoughtful pose, use face reference for accurate facial features and expression, soft cinematic lighting creating delicate highlights and deep shadows, subtle reflections on hair, eyes, and clothing, photorealistic textures capturing fine details of fabric, skin, and hair strands, vertical 9:16 format, 4K resolution, sharp focus on face, lips, hand, and outfit, minimalistic black and white floor with subtle texture, relaxed and confident posture, professional, stylish, visually engaging composition, trendy Instagram-ready cinematic aesthetic, full monochrome harmony throughout the scene."
}
,
    "12.jpg": {
    title: "Cinematic Vintage Car Portrait",
    description: "A refined portrait of a young woman seated in a red vintage car, captured in soft natural daylight. The image emphasizes calm, serious expression, warm tones, shallow depth of field, and a cinematic, editorial vintage aesthetic.",
    image: "assets/images/12.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "vintage portrait, cinematic lighting, soft daylight, editorial style, shallow depth, warm tones",
    likes: 1,
    date: "November 25, 2025",
    prompt: "Portrait photo of a young woman sitting in a red vintage car, wearing a navy blue baseball cap with embroidered logo, aviator glasses, and cream sweater, looking through the car window with a calm serious expression, natural soft daylight, cinematic vintage aesthetic, warm tones, shallow depth of field, realistic lighting, muted color palette, shot on Nikon D850 with 50mm f/1.8 lens, editorial photography style, 4k ultra detailed"
}
,
    "13.jpg": {
    title: "Urban Fashion Portrait with Vibrant Sneakers",
    description: "A hyper-realistic urban fashion portrait of a young man in a dynamic pose. Emphasis on oversized light-toned athletic clothing and striking white sneakers with purple accents against a vivid yellow backdrop, creating a bold, modern aesthetic.",
    image: "assets/images/13.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "urban fashion, vibrant sneakers, hyper-realistic, dynamic pose, bold colors, modern portrait",
    likes: 1,
    date: "October 15, 2025",
    prompt: "Hyper-realistic urban fashion portrait of a young man sitting in a stylized pose, with a low angle emphasizing his sneakers. He wears an oversized light-toned athletic outfit, featuring a hoodie and a voluminous plush jacket. The sneakers have a modern design, white with vibrant purple details, creating a striking contrast against a vivid Butter Yellow (#F6D860) background. The setting is minimalist, with a solid yellow backdrop that highlights the figures."
}
,
    "14.jpg": {
    title: "Minimalist Fashion Portrait with Perspective Shoe",
    description: "A clean, minimalist portrait of a man seated on a bright surface, emphasizing oversized sneakers with a low-angle perspective. Neutral tones, soft even lighting, and subtle modern elegance highlight the fashion and composition.",
    image: "assets/images/14.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "minimalist portrait, fashion photography, perspective shoe, clean aesthetic, modern elegance, soft lighting",
    likes: 1,
    date: "November 13, 2025",
    prompt: "Edit the attached image of a man sitting on a bright white surface, angled slightly toward the viewer. He is wearing a short-sleeved cream-colored shirt over a brown T-shirt, paired with wide dark brown pants. Accessories include a small black beaded necklace and a silver watch. His hair is as in the photo, and his facial expression is neutral, looking slightly upward. His body appears slim, with his right leg bent forward, wearing a large light gray and white sneaker in the foreground, creating a forced perspective effect. The other leg is also bent and extends to the right. The lighting is bright and even, casting a soft shadow of the shoe on the white surface. The camera angle is low to emphasize the size of the shoe and add depth to the image. The atmosphere is clean and minimalistic, with a touch of modern elegance, rendered in over 4K resolution."
}
,
    "15.jpg": {
    title: "Neon Side-Profile Portrait",
    description: "A photorealistic side-profile portrait of a person in a black hoodie with headphones. Dual neon lighting—cyan key light and red rim light—creates high-contrast, cinematic reflections and a subtle glow, emphasizing calm expression and minimalistic composition.",
    image: "assets/images/15.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "neon portrait, side profile, photorealistic, cinematic lighting, minimal, dual neon",
    likes: 1,
    date: "November 13, 2025",
    prompt: "Side profile portrait of the person from the input photo, facing right, eyes closed, calm expression, on a pure black background. Plain hoodie with the hood up and Apple silver over-ear headphones. Lighting: Dual Neon - Cyan/Turquoise key light from the front right and vivid red rim light from the opposite side; high contrast, pronounced rim glow, glossy reflections on the headphones, soft cinematic bloom. Photorealistic, subtle beauty retouch, shallow depth of field (F/2), minimal, no other elements."
}
,
    "16.jpg": {
    title: "Monochrome Power Suit Portrait",
    description: "A striking black-and-white portrait of a woman in a tailored power suit, seated confidently in a modern chair. Dramatic spotlighting highlights her features, creating a bold, authoritative, and minimalist composition.",
    image: "assets/images/16.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "monochrome portrait, power suit, dramatic lighting, bold, minimalist, authoritative",
    likes: 1,
    date: "November 13, 2025",
    prompt: "Design a bold, monochrome portrait of a woman dressed in a tailored all-black power suit. She is seated casually in a modern steel chair against a seamless dark background. A strong single spotlight casts sharp shadows, emphasizing her features with intensity and authority."
}
,
    "17.jpg": {
    title: "Cinematic Urban Monochrome Portrait",
    description: "A moody, cinematic urban portrait of a man seated on stone steps in a minimalistic black outfit. Warm, diffused lighting highlights facial features and posture, emphasizing confidence, sophistication, and professional editorial fashion vibes against a softly blurred urban background.",
    image: "assets/images/17.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "urban portrait, cinematic, monochrome outfit, editorial fashion, professional, moody, minimalistic",
    likes: 1,
    date: "October 13, 2025",
    prompt: "A CINEMATIC URBAN PORTRAIT OF ME, KEEPING MY REAL FACE UNCHANGED I AM SITTING CASUALLY ON OUTDOOR STONE STEPS IN FRONT OF A BUILDING ENTRANCE, LEANING SLIGHTLY FORWARD WITH A CONFIDENT AND CONTEMPLATIVE POSTURE MY LEFT ELBOW RESTS ON MY KNEE, WITH MY HAND RAISED TO MY TEMPLE IN A THOUGHTFUL GESTURE, WHILE MY RIGHT ARM HANGS MORE LOOSELY, WITH MY HAND EXTENDED DOWNWARD IN A RELAXED POSITION MY LEGS ARE BENT NATURALLY, SPREADING APART FOR A GROUNDED AND STRONG PRESENCE MY GAZE IS DIRECTED TOWARD THE CAMERA, STEADY AND INTENSE, WITH A CALM YET POWERFUL EXPRESSION I AM WEARING A BLACK OUTFIT: A FITTED TURTLENECK SWEATER LAYERED UNDER A BLACK COAT WITH A WIDE COLLAR AND SUBTLE TEXTURE. THE COAT HAS A TAILORED YET MODERN LOOK, WITH A SLIGHTLY MATTE FABRIC THAT ABSORBS THE LIGHT, CREATING DEPTH, MY TROUSERS ARE ALSO BLACK SLIM-FITTED, COMPLETING THE CLEAN, MONOCHROMATIC STYLE. NO VISIBLE ACCESSORIES, EMPHASIZING MINIMALISM AND SOPHISTICATION. THE BACKGROUND SHOWS PART OF AN URBAN BUILDING WITH GLASS DOORS AND WARM INTERIOR LIGHTS SOFTLY GLOWING, ADDING CONTRAST TO THE DARKER TONES OF MY OUTFIT. THE LIGHTING IS WARM AND DIFFUSED, HIGHLIGHTING MY FACE AND UPPER BODY WHILE CREATING SOFT SHADOWS THAT ADD CINEMATIC DEPTH. THE CAMERA CAPTURES ME SLIGHTLY FROM BELOW (LOW ANGLE), EMPHASIZING STRENGTH AND PRESENCE, FRAMED FROM THE KNEES UP, THE FOCAL LENGTH RESEMBLES A PORTRAIT LENS AROUND 50-85MM, PRODUCING NATURAL PROPORTIONS WITH A SHALLOW DEPTH OF FIELD THAT KEEPS ME SHARP AGAINST THE SOFTLY BLURRED BACKGROUND STYLE CINEMATIC, MOODY URBAN PORTRAIT, EDITORIAL FASHION PHOTOGRAPHY, MINIMALISTIC MONOCHROME OUTFIT, PROFESSIONAL MODEL VIBE"
}
,
    "18.jpg": {
    title: "Melancholic Rainy Side-Profile Portrait",
    description: "A close-up side-profile portrait of a young man standing in the rain. Wind-swept hair, raindrops on skin, and thoughtful expression convey a pensive and melancholic mood, with subtle texture and movement enhancing the cinematic feel.",
    image: "assets/images/18.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "rainy portrait, side profile, melancholic, cinematic, thoughtful, pensive, textured hair",
    likes: 1,
    date: "November 17, 2025",
    prompt: "A close-up side profile of a 27-year-old young man (based on the attached photo), standing in the rain, gazing thoughtfully into the distance with a pensive, melancholic look. He's wearing a dark baseball cap featuring a red accent and black over-ear headphones. His thick, dark hair is windswept by the coastal breeze, with strands falling loosely across his face, adding texture and movement. Raindrops glisten on his skin."
}
,
    "19.jpg": {
    title: "Minimalist Pastel Studio Portrait",
    description: "A high-fashion, minimalist studio portrait of a male model in soft pastel tones. Close-frame composition emphasizes calm expression, natural hair, oversized cream shirt, and relaxed trousers. Diffused lighting creates a smooth, polished, cinematic aesthetic with no facial shadows.",
    image: "assets/images/19.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "minimalist portrait, studio, pastel tones, high-fashion, cinematic, diffused lighting, calm expression",
    likes: 1,
    date: "October 16, 2025",
    prompt: "Minimalist cinematic 4K studio portrait (9:16 ratio), featuring a male model seated facing forward in a close-frame editorial style. The background is a bright pastel color-pool combination of mint, soft aqua, and gentle turquoise vibrant but calming. Lighting is fully diffused to ensure the facial structure remains clear, smooth, and naturally matched to the uploaded face reference. The model sits on a premium matte-stone cube seat clean, modern, and high-end. This time the pose is more front-facing and close: body slightly leaning forward with confidence, elbows resting lightly on the knees, fingers interlocked softly, giving a sharp but relaxed editorial posture. The shot stays close enough to capture the facial details clearly. Outfit: An oversized aesthetic pastel-cream shirt with soft folds, paired with off-white relaxed trousers for perfect harmony with the mint background. Shoes are bold luxury sneakers thick sole, curved mid-profile, soft matte white body with clean contouring. Hair is styled in a natural messy-soft look, gently falling around the forehead. His expression is calm but slightly attentive, chin lightly raised. The lighting ensures **no shadows** on the face. The background stays smooth and bright, creating a polished commercial aesthetic. Overall mood: modern, high-fashion, clean, and cinematic."
}
,
    "20.jpg": {
    title: "Golden Halo Studio Portrait",
    description: "A moody studio portrait of a person bathed in warm golden-orange light, creating a glowing halo effect behind them. Soft, sunset-like tones sculpt the face and upper body, while strong shadows add depth and cinematic drama, with eyes closed and a gentle upward chin tilt.",
    image: "assets/images/20.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "studio portrait, golden light, halo effect, moody, cinematic, warm tones, soft shadows",
    likes: 1,
    date: "October 15, 2025",
    prompt: "Moody studio portrait of the upload person, bethed in golden-orange spotlight that create glowing circular halo behind Thema on the wall The warm light should sculpt the face and upper body with soft, sunset-like tones, while casting s strong head shadow to the right. Style the person. Her eye are closed and chin tilted slightly up"
}
,
    "21.jpg": {
    title: "Moody Cinematic Table Portrait",
    description: "A cinematic portrait of a man seated at a wooden table, leaning slightly forward with soft, moody lighting. The image emphasizes thoughtful expression, subtle stubble, and muted cinematic tones, with shallow depth of field and sharp focus on face and hands against a minimalist dark background.",
    image: "assets/images/21.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "cinematic portrait, moody lighting, shallow depth, thoughtful expression, muted tones, minimalist, table portrait",
    likes: 1,
    date: "October 14, 2025",
    prompt: "A cinematic portrait of myself, keeping my exact face unchanged. I am sitting at a wooden table, leaning slightly forward with my right forearm resting on the table. My right hand is relaxed and placed over a dark ceramic mug, fingers long and slightly bent, with a bold silver rectangular ring on my ring finger. My left arm is bent and casually rests on the table. I wear a dark, slightly loose long-sleeve henley shirt with the top buttons undone, revealing part of my chest and a thin chain necklace. My facial hair is light stubble. My gaze is directed to the side, away from the camera, giving a thoughtful and slightly mysterious expression. The background is dark and minimalist, with soft moody lighting highlighting the texture of my hair and face, creating strong contrast and depth. The photo is taken at eye level, with a shallow depth of field and an 85mm portrait lens effect, emphasizing sharp focus on my face and upper body while keeping the background blurred. The overall color grading is muted and cinematic, with cool tones and soft shadows."
}
,
    "22.jpg": {
    title: "Stylish Full-Body Indoor Portrait",
    description: "A relaxed full-body portrait of a young man sitting on the floor indoors, leaning against a light wall with soft sunlight. Casual outfit, including a faded pink puffer jacket, white t-shirt, distressed jeans, and sneakers. Accessories add subtle detail while the pose emphasizes ease and natural confidence.",
    image: "assets/images/22.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "full-body portrait, indoor, casual fashion, relaxed pose, stylish, natural lighting, sunlight",
    likes: 1,
    date: "October 14, 2025",
    prompt: "Ultra-realistic full-body portrait of a stylish young man sitting casually on the floor indoors, leaning back against a plain off-white wall with sunlight casting a oft shadow. Outfit: a white round-neck t-shirt layered with a faded pink jeans puffer jacket, paired with distressed white jeans and white sneakers, Accessories include a apple watch, bracelet, and silver rings. His pose is relaxed with one knee bent. upward and his hands, face as uploaded image with dark wavy hair."
}
,
    "23.jpg": {
    title: "Cinematic Hyper-Realistic Portrait",
    description: "Ultra-realistic cinematic portrait of a handsome young man wearing sunglasses. Soft, moody lighting highlights facial contours, skin texture, and subtle details. Relaxed pose, voluminous hair, and blurred lush green background with warm backlight create depth, realism, and a serene natural mood.",
    image: "assets/images/23.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "cinematic portrait, hyper-realistic, sunglasses, moody lighting, natural background, relaxed pose, detailed features",
    likes: 1,
    date: "October 11, 2025",
    prompt: "Ultra-realistic 256K hyper-detailed cinematic portrait of a very handsome young man, face 100% identical to the uploaded reference photo, wearing sunglasses, confident expression. Soft, moody cinematic lighting highlights his facial features, emphasizing the contours, skin texture, and subtle details. He leans casually in a relaxed pose, wearing an oversized black t-shirt that complements his figure. His voluminous, well-styled hair adds depth and character, perfectly matching the reference photo. The background is softly cinematic: deep, blurred lush green foliage with warm yellow backlight subtly illuminating the top of his head, creating a natural halo effect. Foreground leaves are softly visible, adding depth and immersive layering to the composition. Lighting is soft and cinematic, with gentle shadows and highlights enhancing facial realism and texture. Color grading leans toward warm, earthy tones with a serene, natural mood. The overall image is rendered in ultra-realistic 256K de"
}
,
    "24.jpg": {
    title: "Dramatic Black & White Portrait",
    description: "High-quality black and white portrait with dramatic lighting and strong contrast. The subject's face and upper torso are highlighted against a completely black background. Side/top lighting creates striking shadows, emphasizing facial features and conveying depth and introspection.",
    image: "assets/images/24.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "black and white, dramatic lighting, high contrast, portrait, studio, emotional, introspective",
    likes: 1,
    date: "October 10, 2025",
    prompt: "Using the reference photo, use my face and create a high-quality black and white portrait with dramatic lighting and strong contrast. The background should be completely black, highlighting only the person's face and part of their torso. The person wears a collared shirt, and has a neutral and warm expression. The light should come from a side or top angle, creating striking shadows that enhance facial features. The style should resemble studio photography with an artistic and emotional focus, conveying depth and introspection."
}
,
    "25.jpg": {
    title: "Cinematic Rooftop Portrait",
    description: "Hyper-realistic cinematic portrait of a man sitting on the edge of a skyscraper at blue hour, looking over his shoulder. Softly blurred city skyline below, natural lighting, strong bokeh, and shallow depth of field create a dramatic and immersive scene.",
    image: "assets/images/25.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "cinematic portrait, rooftop, cityscape, blue hour, shallow depth, bokeh, hyper-realistic",
    likes: 1,
    date: "October 12, 2025",
    prompt: "Hyper-realistic 9:16 overhead shot of a man wearing Cap back words sitting on a skyscraper edge at blue hour, dangling legs. Looking back over shoulder with city skyline softly blurred below. Natural lighting. cinematic color grading, strong bokeh, shallow depth of field, 8K ultra-detailed cinematic shot."
}
,
    "26.jpg": {
    title: "Surreal Musical Portrait",
    description: "A surreal, modern portrait of a young man immersed in a world of sound, eyes closed, wearing white headphones. Surrounded by floating doodles of music notes, stars, and abstract waves against a bright turquoise gradient background. Dreamy, futuristic vibe with casual outfit subtly illuminated by rhythm.",
    image: "assets/images/26.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "surreal portrait, music, headphones, dreamy, futuristic, floating doodles, abstract, casual fashion",
    likes: 1,
    date: "October 12, 2025",
    prompt: "Create a surreal, modern poster of a young man (use the uploaded picture as reference for the face) lost in his own world of sound - he stands in profile, eyes closed, wearing large white headphones. Surround him with hand-drawn doodles of flowing music notes, stars, planets, and abstract waves, all orbiting around his head like he's floating through a musical galaxy. Use a bright turquoise or gradient background, with white and neon pink sketches, giving it a dreamy, futuristic feel. Add playful handwritten words like 'vibe,' 'dream,' 'flow' integrated into the design. His outfit can be casual - a denim jacket or oversized hoodie - glowing subtly as if illuminated by the rhythm."
}
,
    "27.jpg": {
    title: "High-Fashion Monochrome Portrait",
    description: "Black and white high-fashion portrait of a woman wearing a loose white blouse, arm raised partially covering her face. Intense gaze, dramatic shadows, and sharp natural light highlight facial features and texture, creating a bold and artistic editorial composition.",
    image: "assets/images/27.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "monochrome, high-fashion, editorial, dramatic lighting, portrait, intense gaze, artistic",
    likes: 1,
    date: "October 12, 2025",
    prompt: "Use the attached image of the model as facial reference and physical features. Black and white high-fashion editorial portrait of uploaded person, wearing a loose white blouse. She poses with one arm raised, partially covering her face while holding her hair up, creating a dramatic and artistic composition. Her gaze is intense and captivating, directed toward the camera, exuding a strong, enigmatic aura. Background: minimalist plain wall with sharp natural daylight casting defined shadows, adding depth and contrast. Lighting: harsh natural sunlight, high-contrast setup highlighting facial contours, sharp cheekbones, and texture of the hair and fabric. Pose: bold and expressive, arm lifted framing the face, emphasizing raw emotion and editorial style. Camera: eye-level angle, close-up framing focusing on facial expression, texture, and dramatic shadow play. Captured with a Canon EOS R5 full-frame DSLR, 85mm f/1.8 lens for crisp detail, tonal depth, and fine grain. Style: high-fashion editorial in monochrome,"
}
,
    "28.jpg": {
    title: "Cinematic Urban Fashion Portrait",
    description: "Hyper-realistic cinematic fashion portrait of a young man seated on a white bean bag, wearing oversized dark streetwear with layered stylish pieces. Dramatic studio lighting and minimal grey background emphasize his refined features and elegant physique, creating a modern urban editorial vibe.",
    image: "assets/images/28.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "urban fashion, cinematic, editorial, portrait, modern, streetwear, dramatic lighting",
    likes: 1,
    date: "October 10, 2025",
    prompt: "Hyper-realistic cinematic fashion photoshoot of a 20-year-old boy. He has a refined slim face with a lean, youthful, and elegant physique. Seated casually on a deep white bean bag, he wears bold all-dark chocolate oversized streetwear: a stylish trench coat over a clean white inner t-shirt, wide white pants, chunky sneakers, and a silver watch. The background is minimal with an aesthetic grey tone. The atmosphere reflects powerful drip vibes, like an Adidas campaign editorial, with dramatic studio lighting and a modern urban touch. Keep his face 100% accurate and realistic."
}
,
    "29.jpg": {
    title: "Moody Black & White Portrait",
    description: "Black-and-white aesthetic portrait of a young man seated on the floor, wearing an oversized dark coat. Dramatic lighting and window shadows create a mysterious, emotional, and cinematic atmosphere, with introspective pose and voluminous hair partially covering the face.",
    image: "assets/images/29.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "black and white, moody, cinematic, portrait, introspective, dramatic lighting, emotional",
    likes: 1,
    date: "October 11, 2025",
    prompt: "A black-and-white aesthetic portrait of a stylish me(use my image with accurate face 100% sitting on the floor in dramatic lighting. He is wearing an oversized dark coat, with messy voluminous hair partially covering his face. His pose is emotional and introspective, with one hand near his mouth and his head slightly turned to the side. Shadows from a window fall across the wall behind him, creating a moody and artistic atmosphere. The overall vibe is mysterious, emotional, and cinematic"
}
,
    "30.jpg": {
    title: "Cinematic Sunset Portrait",
    description: "Cinematic portrait of a young man standing near a wall, with dramatic golden sunset lighting casting warm highlights and long shadows. Relaxed pose, casual black t-shirt, and subtle necklace enhance the moody, editorial, and professional fashion vibe.",
    image: "assets/images/30.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "cinematic, portrait, sunset lighting, moody, editorial, fashion, dramatic shadows",
    likes: 1,
    date: "October 11, 2025",
    prompt: "A CINEMATIC PORTRAIT OF ME, KEEPING MY REAL FACE UNCHANGED. 1 AM STANDING CLOSE TO A WALL, MY UPPER BODY SLIGHTLY TURNED TOWARD IT, WITH MY RIGHT SHOULDER LEANING CLOSER WHILE THE REST OF MY TORSO ANGLES OUTWARD, MY ARMS HANG NATURALLY AT MY SIDES, RELAXED AND CASUAL MY HEAD IS TILTED SLIGHTLY TO THE RIGHT, AND I AM LOOKING OFF INTO THE DISTANCE WITH A CALM, THOUGHTFUL EXPRESSION, AS IF LOST IN CONTEMPLATION LAM WEARING A LOOSE-FITTING, PLAIN BLACK T-SHIRT MADE OF SOFT COTTON FABRIC, WITH A RELAXED, CASUAL DRAPE OVER MY SHOULDERS AND TORSO AROUND MY NECK IS A THIN, MINIMALISTIC NECKLACE THAT ADDS A SUBTLE ACCESSORY DETAIL THE LIGHTING IS DRAMATIC AND GOLDEN, AS IF FROM THE SETTING SUN, CASTING LONG RECTANGULAR PATTERNS OF LIGHT AND SHADOW ON THE WALL BEHIND ME. MY SILHOUETTE AND HAIR CREATE A STRONG SHADOW ON THE WALL, ADDING DEPTH AND ATMOSPHERE. THE WARM LIGHT ILLUMINATES PART OF MY FACE AND HAIR, WHILE THE REST REMAINS IN SOFT SHADOW, CREATING A MOODY AND CINEMATIC EFFECT. THE CAMERA IS POSITIONED AT EYE-LEVEL, FRAMING ME FROM THE WAIST UP WITH A PORTRAIT FOCAL LENGTH OF ABOUT 85MM, THE PERSPECTIVE FEELS INTIMATE AND NATURAL, EMPHASIZING THE INTERPLAY OF LIGHT, SHADOW,AND MOOD STYLE: CINEMATIC, EDITORIAL PORTRAIT PHOTOGRAPHY, MOODY SUNSET LIGHTING, NATURAL SHADOWS, PROFESSIONAL FASHION VIBE SAME FACE."
}
,
    "31.jpg": {
    title: "Cinematic Pastel Studio Portrait",
    description: "Stylish cinematic studio portrait of a male model seated in a warm pastel-colored setting, soft diffused lighting, oversized luxurious outfit, and elegant minimalistic composition. The image emphasizes harmony, premium fashion aesthetics, and subtle emotional expression.",
    image: "assets/images/31.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "cinematic, pastel, studio, portrait, fashion, premium, elegant, soft lighting",
    likes: 1,
    date: "October 15, 2025",
    prompt: "Gemini Prompt Cinematic minimalist 4K studio portrait (9:16 ratio), featuring a male model seated comfortably at the center of a warm colorful color-pool background. The backdrop blends soft pastel peach, pink-orange, and light apricot to create a bright, clean, aesthetic studio mood. Lighting is fully diffused, ensuring the face is perfectly bright with zero shadows. Outfit: The model wears an oversized soft-luxury outfit a smooth pastel-rose oversized shirt made from premium flowing fabric, paired with elegant ivory wide-leg trousers. The colors blend beautifully with the warm peach-toned background, creating perfect harmony. Shoes: bold premium sneakers - thick clean sole, minimal matte white body, high-fashion contour. He sits on a professional modern matte-white designer lounge chair curved, smooth, and editorial grade. Pose: He sits slightly forward, body relaxed, legs positioned comfortably. His hands rest naturally on his thighs no pockets involved. Head turns slightly left with a calm cinematic expression. A very soft, pleasant half-smile appears on his face, giving a warm emotional tone. Hair remains slightly tousled, soft, fluffy. Studio lights include a key softbox and a gentle rim-light for shoulder glow. No harsh shadows anywhere. Background remains warm, vibrant, and minimal. Overall tone: stylish, cinematic, and premium oversized fashion portrait with perfect color harmony. @image_prompt"
}
,
    "32.jpg": {
    title: "Fashion Editorial Studio Portrait",
    description: "High-fashion editorial portrait of a male model sitting on a minimalist wooden cube against a clean beige background. Soft studio lighting emphasizes textures of the clothing, modern cinematic style, and professional high-resolution details, highlighting intense expression and relaxed posture.",
    image: "assets/images/32.jpg",
    category: "Portrait",
    model: "Nano Banana Gemini 2.5",
    tags: "fashion, editorial, studio, portrait, cinematic, modern, high-resolution",
    likes: 1,
    date: "October 15, 2025",
    prompt: "A FASHION EDITORIAL STYLE PORTRAIT OF A UPLOADED MAN (100 PERCENT FACE RESERVED) SITTING ON A MINIMALIST WOODEN CUBE AGAINST A CLEAN BEIGE BACKGROUND. HE HAS SLIGHTLY MESSY, WAVY BLACK HAIR AND AN INTENSE EXPRESSION, LEANING FORWARD WITH HIS ELBOWS RESTING ON HIS KNEES. HE IS WEARING A BLACK AND WHITE RETRO-STYLE LEATHER JACKET WITH BOLD HORIZONTAL STRIPES, LOOSE BLACK PANTS, AND PATTERNED SNEAKERS. THE LIGHTING IS SOFT AND STUDIO-LIKE, HIGHLIGHTING TEXTURES OF THE CLOTHING AND GIVING A MODERN, CINEMATIC LOOK. SHOT IN FULL BODY, PROFESSIONAL HIGH-RESOLUTION PHOTOGRAPHY, ULTRA 4K DETAIL, EDITORIAL AESTHETIC"
}
,
    "33.jpg": {
    title: "Cinematic Studio Portrait",
    description: "Cinematic portrait of a young man with vintage wavy hair, clean-cut style, wearing a white t-shirt and light-colored jeans, seated comfortably on a wooden crate. The studio background features dramatic smoke effects in blue and red with a bright black ambiance, emphasizing a modern, stylish aesthetic.",
    image: "assets/images/33.jpg",
    model: "Nano Banana Gemini 2.5",
    tags: "cinematic, portrait, studio, fashion, modern, dramatic lighting",
    likes: 1,
    date: "October 17, 2025",
    prompt: "Create a cool young man from this uploaded photo, wavy, vintage hair, is clean-cut, and is wearing a white t-shirt and light-colored jeans. he's sitting comfortably on a wooden crate. he's looking to the right, holding a denim jacket. The background has a smoke blue & red effect and a bright black studio scene."
}

    
};

// Function to get prompt data by ID (filename)
function getPromptData(id) {
    return promptData[id] || null;
}

// Function to get all prompt data
function getAllPromptData() {
    return promptData;
}

// Export for use in other scripts
window.promptData = {
    getPromptData,
    getAllPromptData,
    data: promptData
};