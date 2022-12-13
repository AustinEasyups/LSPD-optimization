look self images
if (player.baby <= game.adult) {
  if (player.sex = "nb") {
    msg ("You are a {player.animal} named {player.new name}. <br/>")
  }
  else {
    msg ("You are a {player.sex} named {player.new name} who is a {player.animal}. <br/>")
  }
}
else if (player.baby <= game.child) {
  msg ("You are a {player.boy} named {player.new name} who is a {player.animal}. <br/>")
}
else {
  msg ("You are a little {player.boy} who your mommy calls {player.new name} and you are mommy's little {player.pup}. <br/>")
}
if (player.baby <= game.adult) {
  if (player.animal <> "human") {
    aeu = "From the tip of your {player.tail} to "
  }
  else {
    // if human
    aeu = "From the tips of your toes to the top of the hair on your head, "
  }
  if ((player.animal = "wolf") or (player.animal = "equine") or (player.animal = "deer") or (player.animal = "bat") or (player.animal = "kangaroo") or (player.animal = "ferret")) {
    aeu = aeu+"your cold wet nose, "
  }
  else if (player.animal = "cat") {
    aeu = aeu+"your big fluffy ears, "
  }
  else if (player.animal = "dragon") {
    aeu = aeu+"the tips of your tiny wings, "
  }
  else if ((player.animal = "rat") or (player.animal = "otter") or (player.animal = "hyena") or (player.animal = "bear")) {
    aeu = aeu+"the end of your nose, "
  }
  if ((player.animal = "deer") and (player.sex = "male")) {
    aeu = aeu + "you are an adult {player.animal}. Fully grown with a mighty set of antlers, though your current attire makes you look more infantile. <br/>"
  }
  else {
    aeu = aeu + "you are an adult {player.animal}. Fully grown, though your current attire makes you look more infantile. <br/>"
  }
  msg (aeu)
}
else if (player.baby <= game.child) {
  if (player.animal = "bat") {
    aeu = "Looking up towards your {player.feet}, you begin to wonder if the ceiling was always that close. You wiggle your "
  }
  else {
    aeu = "Looking down towards your {player.feet}, you begin to wonder if the ground was always that close. You wiggle your "
  }
  if (player.animal = "human") {
    aeu = aeu + "toes and clasp your hands onto your face, but nothing feels any different. Are you still the same person you always were?<br/>"
  }
  else if ((player.animal = "deer") and (player.sex = "male")) {
    aeu = aeu + "{player.tail} and touch the nubs on your head that will eventually be antlers, but nothing feels any different. Are you still the same {player.animal} you always were?<br/>"
  }
  else {
    aeu = aeu + "{player.tail} and touch your ears, but nothing feels any different. Are you still the same {player.animal} you always were?<br/>"
  }
  msg (aeu)
}
else {
  if (player.animal = "wolf") {
    msg ("Arf woof ruff! You are an energetic little wolf pup. Your tail begins to wag, proud of how strong you think your high-pitched barking sounds. <br/>")
  }
  else if (player.animal = "cat") {
    msg ("Mew. Mew... You are an adorable kitten with big sparkly eyes which are good for begging for cookies. <br/>")
  }
  else if (player.animal = "dragon") {
    msg ("Rawr! Rawr! You are the tiny terror of the toy box who is a big tough dragon in your mind. Flapping your tiny wings, you imagine yourself flying through the clouds with fire bursting forth from your maw. <br/>")
  }
  else if (player.animal = "human") {
    msg ("You are an excitable little tyke with a good sense of adventure. You love to explore and discover all there is to see in your surroundings. <br/>")
  }
  else if (player.animal = "rat") {
    msg ("Squeak squeak! You are the cutest little rat anybody has ever seen! You can't help but smell everything you can get close to. <br/>")
  }
  else if (player.animal = "otter") {
    msg ("Squeak squeak! You are a lively otter pup, eager to dive into the water and swim all day!<br/>")
  }
  else if (player.animal = "hyena") {
    msg ("Bark bark! You are a ferocious little hyena cub, simply spoiling to get into trouble. <br/>")
  }
  else if (player.animal = "bear") {
    msg ("Roar! You are a terrifying bear cub, chubby and soft. <br/>")
  }
  else if (player.animal = "equine") {
    msg ("Neigh! You are an energetic little foal. You stand proudly and think of how elegant and regal you will look when you grow up. <br/>")
  }
  else if (player.animal = "deer") {
    if (player.sex = "male") {
      msg ("You are an energetic little fawn. You smile and rub your head, eager for your antlers to grow in when you're older. <br/>")
    }
    else {
      msg ("You are an energetic little fawn. You jump from foot to foot, ready to adventure and explore anything around you. <br/>")
    }
  }
  else if (player.animal = "bat") {
    msg ("Squeak! You're a happy little pup. You can't help but look for places to hide everywhere you go. <br/>")
  }
  else if (player.animal = "kangaroo") {
    msg ("You are an eager little joey. You love to balance on your strong tail instead of standing whenever you can. <br/>")
  }
  else if (player.animal = "ferret") {
    msg ("You are an excited little kit. You are constantly in motion, investigating every last thing you find. <br/>")
  }
}
