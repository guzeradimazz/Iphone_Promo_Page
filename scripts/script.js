document.addEventListener('DOMContentLoaded', ()=>{
    const tabs = () =>{
        const cardDetailChange = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitle = document.querySelector('.card-details__title');    
        const cardImageItem = document.querySelector('.card__image_item');
        const descriptionMemory = document.querySelector('.description__memory');

        const data=[
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                memory: 128,
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
                img: 'img/iPhone-silver.png',
                memory: 256,
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                memory: 512,
            },
        ];

        const destruct = ()=>{
            cardDetailChange.forEach(btn => btn.classList.remove('active'));
        };

        cardDetailChange.forEach((btn,i)=>{
            btn.addEventListener('click',()=>{
                if(!btn.classList.contains('active')){
                    destruct();
                    btn.classList.add('active');
                    cardDetailsTitle.textContent = data[i].name;
                    cardImageItem.src = data[i].img;
                    descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memory} ГБ`;
                };
            });
        });



    };

    tabs();
});