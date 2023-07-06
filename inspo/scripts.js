const cards = [
  { name: 'twitter.com/BrettFromDJ', type: 'Follow', url: 'https://twitter.com/BrettFromDJ' },
  {
    name: 'This dude threw together a deck (no website) and is already making $15,000/m as a designer. Still people will claim the course is not worth $150. 🙄',
    type: 'Example',
    url: 'https://twitter.com/BrettFromDJ/status/1658618604773068802',
  },
  { name: 'twitter.com/gregisenberg', type: 'Follow', url: 'https://twitter.com/gregisenberg' },
  {
    name: "Kill products after 90 days if it isn’t a roaring success. If your graveyard isn’t bigger than your house, then you’re doing it wrong. Profitable products or shut down (don't be emotional about the products).",
    type: 'Thread',
    url: 'https://twitter.com/gregisenberg/status/1660396779408433155',
  },
  { name: 'productizeyourself.co', type: 'Course', url: 'https://www.productizeyourself.co' },
  {
    name: "Running a $100,000/m design agency alone has taught me some valuable lessons. Here's 11 things I've learned over the years:",
    type: 'Thread',
    url: 'https://twitter.com/BrettFromDJ/status/1676628192201957376',
  },
  {
    name: 'lemonsqueezy.com',
    type: 'Site',
    url: 'https://www.lemonsqueezy.com/',
  },
  {
    name: 'designpixil.com',
    type: 'Example',
    url: 'https://www.designpixil.com/',
  },
  {
    name: 'designjoy.co',
    type: 'Example',
    url: 'https://designjoy.co/',
  },
  {
    name: 'offmenu.design',
    type: 'Example',
    url: 'https://offmenu.design',
  },
  {
    name: 'viralcuts.co',
    type: 'Example',
    url: 'https://www.viralcuts.co/',
  },
  {
    name: 'copycheer.com',
    type: 'Site',
    url: 'https://copycheer.com/',
  },
  {
    name: 'Reddit / Unlimited, On-Demand PM Tasks. Think it will work?',
    type: 'Thread',
    url: 'https://www.reddit.com/r/ProductManagement/comments/tsiz2i/unlimited_ondemand_pm_tasks_think_it_will_work/',
  },
  {
    name: 'A.Team',
    type: 'Site',
    url: 'https://www.a.team/#companies-why-a-team',
  },
  {
    name: 'Pagy 1.0 - If Carrd and Notion had a baby',
    type: 'Site',
    url: 'https://www.producthunt.com/posts/pagy-1-0',
  },
]

const insert = (className, text, target = document.body, tag = 'div') => {
  const el = document.createElement(tag)
  el.className = className
  el.textContent = text
  target.appendChild(el) // conditional target
  return el
}

cards.forEach(card => {
  const el = insert('card', card.name, document.getElementById('cards'))
  el.addEventListener('click', e => window.open(card.url))
})
