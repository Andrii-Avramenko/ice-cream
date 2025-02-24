import reviewImg1 from '../images/reviews/reviews-per1.jpg';
import reviewImg2 from '../images/reviews/reviews-per2.jpg';
import reviewImg3 from '../images/reviews/reviews-per3.jpg';

const testimonials = [
    {
        image: reviewImg1,
        quote: 'Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus.',
        author: 'Emily, Los Angeles'
    },
    {
        image: reviewImg2,
        quote: 'Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.',
        author: 'Lisa, New York'
    },
    {
        image: reviewImg3,
        quote: 'Lorem ipsum primis in nibh vel risus.',
        author: 'Sophia, Chicago'
    }
];

export function changeTestimonial(index) {
    document.getElementById('reviews-img').src = testimonials[index].image;
    document.getElementById('reviews-text').innerText = testimonials[index].quote;
    document.getElementById('reviews-person').innerText = testimonials[index].author;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}
window.changeTestimonial = changeTestimonial;