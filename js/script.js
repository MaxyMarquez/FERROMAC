$(document).ready(function () {
    $('.category__list .category__item[category="all"]').addClass('item__activo');
    $('.category__item').click(function () {
        var catProduc = $(this).attr('category');
        console.log(catProduc);
        $('.category__item').removeClass('item__activo');
        $(this).addClass('item__activo');

        $('.category__product').hide();

        $('.category__product[category="' + catProduc + '"]').show();
    });
});

let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.socialMedia');
list.forEach(elements => {
    document.addEventListener('mouseenter', function (event) {
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    });
});