function generateRandomPost() {
  const random = Math.floor(Math.random() * 100 * 0.2);
  const names = [
    "Irving Lind",
    "Campbell Elliot",
    "Karson Gleason",
    "Nyasia Shelby",
    "Janiya Watson",
    "Jerimiah Sheets",
    "Rashawn Bowers",
    "Madyson Warner",
    "Georgina Jasso",
    "Laurel Suarez",
  ];
  const titles = [
    "Exciting News!",
    "New Project Started",
    "Thoughts on Technology",
    "Exploring the Future",
    "Designing Tomorrow",
    "Coding Adventures",
    "Innovative Solutions",
    "The Power of Creativity",
    "Inspiring Discoveries",
    "Breaking Boundaries",
  ];
  const contexts = [
    "🚀 Excited to announce my new role as Chief Coffee Drinker at Caffeine Innovations! ☕️ Looking forward to brewing up success and caffeinating the world! #NewJob #CoffeeLover",
    "🌸 Lost in the pastel hues of a cotton candy sunset 🌅✨ #PastelDreams #SunsetMagic",
    "📚 Just finished reading 'Quantum Physics for Dummies' – because who needs a life when you can understand the universe? 🌌 #NerdLife #ScienceGeek",
    "🌙 Moonlight whispers secrets to the night, and I listen with stardust in my veins. ✨🌟 #MidnightMusings #CosmicPoetry",
    "🌐 Excited to announce my new startup, 'CatMemes Inc.'! We're disrupting the feline content industry one adorable GIF at a time. 🐾🚀 #EntrepreneurLife #CatMemeQueen",
    "TIFU by accidentally sending my grocery list to my boss instead of my wife. Now my boss thinks I'm really into kale and almond milk.",
    "🌟 Honored to receive the 'Best Virtual Background Changer' award at the Virtual Office Excellence Summit! Because a good background is half the battle in video calls. 🖼️🏆 #RemoteWorkChampion",
    "🔥 Draco Malfoy's hair is the real hero of the Harry Potter series. Discuss. 💁‍♂️💫 #HairGoals #SlytherinSwagger",
  ];
  const avatar = [
    `https://i.pravatar.cc/150?u=${random}`,
    `https://i.pravatar.cc/150?u=${random}`,
    `https://i.pravatar.cc/150?u=${random}`,
    `https://i.pravatar.cc/150?u=${random}`,
  ];
  const likes = random;
  const dislikes = random;
  const comments = Math.floor(Math.random() * 50);
  const shares = Math.floor(Math.random() * 20);
  const images = [
    `https://picsum.photos/400/400?random=${random}`,
    `https://picsum.photos/400/400?random=${random}`,
    `https://picsum.photos/400/400?random=${random}`,
    `https://picsum.photos/400/400?random=${random}`,
  ];
  const dates = [
    "2h ago",
    "3h ago",
    "4h ago",
    "5h ago",
    "6h ago",
    "1m ago",
    "2m ago",
    "3m ago",
    "4m ago",
    "5m ago",
    "1y ago",
    "2y ago",
    "4y ago",
    "3y ago",
  ];

  // Generate a random index for each property
  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomAvatarIndex = Math.floor(Math.random() * avatar.length);
  const randomTitleIndex = Math.floor(Math.random() * titles.length);
  const randomContextIndex = Math.floor(Math.random() * contexts.length);
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const randomDateIndex = Math.floor(Math.random() * dates.length);

  // Construct the random post object
  const randomPost = {
    id: random,
    avatar: avatar[randomAvatarIndex],
    name: names[randomNameIndex],
    title: titles[randomTitleIndex],
    context: contexts[randomContextIndex],
    likes: likes,
    dislikes: dislikes,
    comments: comments,
    shares: shares,
    image: images[randomImageIndex],
    date: dates[randomDateIndex],
  };

  return randomPost;
}
const posts = Array.from({ length: 10 }, () => generateRandomPost());
export default posts;
