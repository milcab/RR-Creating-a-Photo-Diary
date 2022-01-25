export const renderKoalaCardContent = koala => {
    const koalaContent = document.createElement('div')
    koalaContent.setAttribute('class', 'content')

    const header = document.createElement('div')
    header.setAttribute('class', 'header')
    header.append(koala.name)

    const descriptionParagraph = document.createElement('p')
    descriptionParagraph.append(koala.description)

    const descriptionContainer = document.createElement('div')
    descriptionContainer.setAttribute('class', 'description')
    descriptionContainer.append(descriptionParagraph)

    koalaContent.append(
        header,
        descriptionContainer
    )

    return koalaContent
}