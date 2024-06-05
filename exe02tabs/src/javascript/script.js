const tabs = document.querySelectorAll('.tab_btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active')
    
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id')
    const content = document.getElementById(contentId)
    console.log(content)

    content.classList.add('show')
}

const currentActiveTab = document.querySelector('.tab_btn.active')
tabClicked(currentActiveTab)