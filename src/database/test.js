const Database = require("./db");
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  //inserir dadso na tabela
  await saveOrphanage(db, {
    lat: "-3.7295772",
    lng: "-38.6732329",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "977774444",
    images: [
      "https://images.unsplash.com/photo-1598252976330-b8a1461d47a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1595009552535-be753447727e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
  })

  //consultar dados da tabela
  const selectOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectOrphanages)

  // consultar somente um orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
  console.log(orphanage)

  // deletar dato da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id='4'"))
  //console.log(await db.run("DELETE FROM orphanages WHERE id='5'"))
})
