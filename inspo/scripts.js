const cards = [
  {
    img: 'https://pbs.twimg.com/profile_banners/1222553096196222976/1683595979/1500x500',
    name: 'twitter.com/BrettFromDJ',
    type: 'Follow',
    url: 'https://twitter.com/BrettFromDJ',
  },
  {
    img: 'https://pbs.twimg.com/media/FwSXZ8taUAYwFQo?format=jpg&name=medium',
    name: 'This dude threw together a deck (no website) and is already making $15,000/m as a designer. Still people will claim the course is not worth $150. 🙄',
    type: 'Example',
    url: 'https://twitter.com/BrettFromDJ/status/1658618604773068802',
  },
  {
    img: 'https://pbs.twimg.com/profile_banners/1262499094876033026/1637695111/1500x500',
    name: 'twitter.com/gregisenberg',
    type: 'Follow',
    url: 'https://twitter.com/gregisenberg',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/1577116785656139776/5mi0qgTz_400x400.jpg',
    name: "Kill products after 90 days if it isn’t a roaring success. If your graveyard isn’t bigger than your house, then you’re doing it wrong. Profitable products or shut down (don't be emotional about the products).",
    type: 'Thread',
    url: 'https://twitter.com/gregisenberg/status/1660396779408433155',
  },
  {
    img: 'https://res.cloudinary.com/dk7tlg6eu/image/upload/q_auto/v1689782838/pragma.com/productizeyourself.co_itq2ue.png',
    name: 'productizeyourself.co',
    type: 'Course',
    url: 'https://www.productizeyourself.co',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/1660314599768616961/fvuKUXZV_400x400.jpg',
    name: "Running a $100,000/m design agency alone has taught me some valuable lessons. Here's 11 things I've learned over the years:",
    type: 'Thread',
    url: 'https://twitter.com/BrettFromDJ/status/1676628192201957376',
  },
  {
    img: 'https://res.cloudinary.com/dk7tlg6eu/image/upload/q_auto/v1689783104/pragma.com/lemonsqueezy.com_zotgki.jpg',
    name: 'lemonsqueezy.com',
    type: 'Site',
    url: 'https://www.lemonsqueezy.com/',
  },
  {
    img: 'https://res.cloudinary.com/dk7tlg6eu/image/upload/q_auto/v1689783104/pragma.com/designpixil.com_qnxwao.jpg',
    name: 'designpixil.com',
    type: 'Example',
    url: 'https://www.designpixil.com/',
  },
  {
    img: 'https://res.cloudinary.com/dk7tlg6eu/image/upload/q_auto/v1689783104/pragma.com/designjoy.co_rnlwxg.png',
    name: 'designjoy.co',
    type: 'Example',
    url: 'https://designjoy.co/',
  },
  {
    img: 'https://res.cloudinary.com/dk7tlg6eu/image/upload/q_auto/v1689783302/pragma.com/offmenu.design_yru9rf.jpg',
    name: 'offmenu.design',
    type: 'Example',
    url: 'https://offmenu.design',
  },
  {
    img: 'https://res.cloudinary.com/dk7tlg6eu/image/upload/q_auto/v1689783302/pragma.com/viralcuts.co_p3d8cl.jpg',
    name: 'viralcuts.co',
    type: 'Example',
    url: 'https://www.viralcuts.co/',
  },
  {
    img: 'https://copycheer.com/wp-content/uploads/2022/03/Copy-Cheer-1.png',
    name: 'copycheer.com',
    type: 'Site',
    url: 'https://copycheer.com/',
  },
  {
    img: 'https://res.cloudinary.com/dk7tlg6eu/image/upload/q_auto/v1689783477/pragma.com/reddit-tsiz2i_hik3ze.png',
    name: 'Reddit / Unlimited, On-Demand PM Tasks. Think it will work?',
    type: 'Thread',
    url: 'https://www.reddit.com/r/ProductManagement/comments/tsiz2i/unlimited_ondemand_pm_tasks_think_it_will_work/',
  },
  {
    img: 'https://assets-global.website-files.com/60aedfe8d838fc583e6d9cd7/6287b60123c95697ba75a88c_graph%20image%20preview.jpg',
    name: 'A.Team',
    type: 'Site',
    url: 'https://www.a.team/#companies-why-a-team',
  },
  {
    img: 'https://ph-files.imgix.net/8046050f-2ebe-4f25-a441-aa2e84cfecf7.png?auto=compress',
    name: 'Pagy 1.0 - If Carrd and Notion had a baby',
    type: 'Site',
    url: 'https://www.producthunt.com/posts/pagy-1-0',
  },
  {
    img: 'https://res.cloudinary.com/dk7tlg6eu/image/upload/q_auto/v1689783650/pragma.com/dispatch.latecheckout.studio_ezmb4f.jpg',
    name: 'Design Dispatch by Late Checkout',
    type: 'Example',
    url: 'https://dispatch.latecheckout.studio',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/1660314599768616961/fvuKUXZV_400x400.jpg',
    name: '1. Make your offer irresistible. I launched my design subscription service at just $449/m. It was the steal of a lifetime. Getting clients at that rate required zero effort given my skill level. It reduced the risk for clients to try something new, and I learned a lot.',
    type: 'Thread',
    url: 'https://twitter.com/BrettFromDJ/status/1676628193393115136',
  },
]

const insert = (className, text, target = document.body, tag = 'div') => {
  const el = document.createElement(tag)
  el.className = className
  el.textContent = text
  target.appendChild(el) // conditional target
  return el
}

const typeToIconMap = {
  Course: 'fa-regular fa-graduation-cap',
  Example: 'fa-regular fa-copy',
  Follow: 'fa-brands fa-twitter',
  Site: 'fa-regular fa-eye',
  Thread: 'fa-regular fa-comments-alt',
}

cards.forEach(card => {
  const el = insert('card', '', document.getElementById('cards'))
  if (card.img) {
    const img = insert('card-img', '', el, 'img')
    img.src = card.img
  }
  const name = insert('card-name', card.name, el)
  const tag = insert('card-tag', '', el)
  const icon = insert(`card-icon ${typeToIconMap[card.type]}`, '', tag, 'i')
  const type = insert('card-type', card.type, tag)
  el.addEventListener('click', e => window.open(card.url))
})
