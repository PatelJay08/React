import React from 'react'

function NameList() {
    // const persons = [
    //   {
    //     id: 1,
    //     name: 'jay',
    //     age: '20',
    //     skill: 'React'
    //   },
    //   {
    //     id: 1,
    //     name: 'Pranav',
    //     age: '21',
    //     skill: 'Html'
    //   },
    //   {
    //     id: 1,
    //     name: 'omkar',
    //     age: '20',
    //     skill: 'Css '
    //   }
    // ]

    const names = ['jay','pranav','omkar']
    const NameList = names.map(name => <h2 key={name}>{name}</h2>)
    // const personList = persons.map(persons => <Person key={persons.name} person={persons} />)
  return (
    <div>
      {NameList}
    </div>
  )
}

export default NameList
