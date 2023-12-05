$(document).ready(function () {

    var selectedIndex;
    var speed = 3000;
    var timeDelta = 0;
    var lastSlideAutoplay;
    var startTime = 0;
    var cubeSwiper;
    var activeSwiper;


    let allStories = [
        {
            name: "user1",
            thumbUrl: "assets/images/profile-1619559142670-fcd58dab16a9image.png",
            imageUrl: [
                {
                    img: "assets/images/1.png",
                    // link: "https://www.digikala.com/"

                },
                {
                    img: "assets/images/1bb8eb0c987d04a2bf14272a10c97eb29f81b1a7_1676437844.jpg",
                    link: "https://www.digikala.com/landing/economy-la/?&promo_name=%D9%84%D9%88%D8%A7%D8%B2%D9%85+%D8%AE%D8%A7%D9%86%DA%AF%DB%8C+%D8%A8%D8%B1%D9%82%DB%8C+%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%DB%8C&promo_position=home_slider_new_v2&promo_creative=141452&bCode=141452"

                },
                {
                    img: "assets/images/ae497af0f49e48311eedd7ae7077d4493c1e37f7_1667729120.jpg",
                    link: "https://www.digikala.com/product/dkp-9812749/%D8%AA%D9%84%D9%88%DB%8C%D8%B2%DB%8C%D9%88%D9%86-%D8%A7%D9%84-%D8%A7%DB%8C-%D8%AF%DB%8C-%D8%AC%DB%8C-%D9%BE%D9%84%D8%A7%D8%B3-%D9%85%D8%AF%D9%84-gtv-43ph418n-%D8%B3%D8%A7%DB%8C%D8%B2-43-%D8%A7%DB%8C%D9%86%DA%86/"

                }
            ],
            title: "Title No. 1",

        },

        {
            name: "user2",
            thumbUrl: "assets/images/profile-1644227005814-a6eafe2c050bimage.jpeg",
            imageUrl: [
                {
                    img: "assets/images/1bb8eb0c987d04a2bf14272a10c97eb29f81b1a7_1676437844.jpg",
                    link: "https://www.digikala.com/landing/economy-la/?&promo_name=%D9%84%D9%88%D8%A7%D8%B2%D9%85+%D8%AE%D8%A7%D9%86%DA%AF%DB%8C+%D8%A8%D8%B1%D9%82%DB%8C+%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%DB%8C&promo_position=home_slider_new_v2&promo_creative=141452&bCode=141452"

                },
                {
                    img: "assets/images/2.png",
                    link: "https://www.digikala.com/"

                },
                {
                    img: "assets/images/2.png",
                    link: "https://www.digikala.com/"

                },
                {
                    img: "assets/images/2.png",
                    link: "https://www.digikala.com/"

                },
                {
                    img: "assets/images/2.png",
                    link: "https://www.digikala.com/"

                },
            ],
            title: "Title No. 2",
        },

        {
            name: "user3",
            thumbUrl: "assets/images/profile-fb-1544622642-bd417470b1eb.jpg",
            imageUrl: [
                {
                    img: "assets/images/3.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/3.png",
                    link: "https://www.digikala.com/"
                },
                {

                    img: "assets/images/3.png",
                    link: "https://www.digikala.com/"
                },
                {

                    img: "assets/images/3.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/3.png",
                    link: "https://www.digikala.com/"
                },

            ],
            title: "Title No. 3",
        },

        {
            name: 'user4',
            thumbUrl: "assets/images/profile-fb-1548065575-88e940b74bec.jpg",
            imageUrl: [
                {
                    img: "assets/images/4.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/4.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/4.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/4.png",
                    link: "https://www.digikala.com/"
                },
            ],
            title: "Title No. 4",
        },

        {
            name: 'user5',
            thumbUrl: "assets/images/images2.png",
            imageUrl: [
                {
                    img: "assets/images/5.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/5.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/5.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/5.png",
                    link: "https://www.digikala.com/"
                },
            ],
            title: "Title No. 5",
        },

        {
            name: 'user6',
            thumbUrl: "assets/images/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png",
            imageUrl: [
                {
                    img: "assets/images/6.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/6.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/6.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/6.png",
                    link: "https://www.digikala.com/"
                },
            ],
            title: "Title No. 6",
        },

        {
            name: 'user7',
            thumbUrl: "assets/images/profile-fb-1494872644-188ad69aa294.jpg",
            imageUrl: [
                {
                    img: "assets/images/7.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/7.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/7.png",
                    link: "https://www.digikala.com/"
                },
            ],
            title: "Title No. 7",
        },

        {
            name: 'user8',
            thumbUrl: "assets/images/profile-1614848303106-8b13fa6f2d78image.jpeg",
            imageUrl: [
                {
                    img: "assets/images/8.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/8.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/8.png",
                    link: "https://www.digikala.com/"
                },
                {
                    img: "assets/images/8.png",
                    link: "https://www.digikala.com/"
                },
            ],
            title: "Title No. 8",
        }
    ];


    function preloadFirstImage(url) {
        const img = new Image();
        img.src = url;
    }

    function preloadFirstImages() {
        allStories.forEach(story => {
            if (story.imageUrl.length > 0) {
                const firstImageUrl = story.imageUrl[0].img;
                preloadFirstImage(firstImageUrl);
            }
        });
    }

    preloadFirstImages();

    let fullSwiper = $('.full-swiper');
    let overlay = $('.full-swiper .overlay')
    let swiperContainer = $('.swiper-container');
    let storiesSwiper;

    function createMainstory() {

        let story = `
        <div class="swiper storiesSwiper">
        <div class="swiper-wrapper"></div>

    </div>
    `;


        swiperContainer.append(story);
        allStories.forEach(item => {
            let swiperSlide = $('<div class="swiper-slide"></div>');
            const imgElement = $(`<div class="storiesSwiperImg"><img src="${item.thumbUrl}" alt="" class="w-100"></div>`);

            swiperSlide.append(imgElement);
            $('.storiesSwiper .swiper-wrapper').append(swiperSlide);
        })

        storiesSwiper = new Swiper(".storiesSwiper", {
            slidesPerView: "auto",
            spaceBetween: 10,
            on: {
                touchStart(event) {
                    // Get the initial touch position
                    var initialTouchX = event.touches.currentX;

                    // Calculate the positions of each slide
                    function getSlidePositions() {
                        var slidePositions = [];

                        // Loop through each slide
                        event.slides.forEach(function (slide) {
                            // Calculate the position of the slide relative to the container
                            var slidePosition = slide.offsetLeft - event.slides[0].offsetLeft + (slide.offsetWidth / 1.5);
                            slidePositions.push(slidePosition);
                        });

                        return slidePositions;
                    }

                    // Function to calculate the closest slide index based on the touch position
                    function getClosestSlideIndex(touchX) {
                        var slidePositions = getSlidePositions(); // Get slide positions

                        var closestIndex = 0;
                        var closestDistance = Infinity;

                        // Loop through slide positions to find the closest slide
                        for (var i = 0; i < slidePositions.length; i++) {
                            var distance = Math.abs(touchX - slidePositions[i]);

                            if (distance < closestDistance) {
                                closestDistance = distance;
                                closestIndex = i;
                            }
                        }

                        return closestIndex;
                    }

                    // Calculate the closest slide index for the initial touch position
                    selectedIndex = getClosestSlideIndex(initialTouchX);

                    // Add 'active' class to the closest slide
                    $('.storiesSwiper .swiper-slide .storiesSwiperImg').eq(selectedIndex).addClass('active');

                    // Remove 'active' class after touch end
                    function removeActiveClass() {
                        // setTimeout(function() {
                        $('.storiesSwiper .swiper-slide .storiesSwiperImg').removeClass('active');
                        createCubeSwiper();
                        // }, 1000);
                    }

                    event.once('touchEnd', removeActiveClass);
                }
            }


        });

    }


    createMainstory();


    function initCubeSwiper() {
        cubeSwiper = new Swiper(".cubeSwiper", {
            effect: "cube",
            grabCursor: true,
            nested: true,
            initialSlide: selectedIndex,
            allowTouchMove: true, // This disables dragging
            cubeEffect: {
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                init: function () {

                    const activeIndex = this.activeIndex;
                    // createSlides(activeIndex);
                    // Set a cookie with the name 'seen_slide' and value as the index of the currently active slide
                    functionActiveSwiper(activeIndex)
                    functionActiveSwiper(activeIndex + 1)
                    // runProgress()
                    // Do something with each slide's index here

                },
                // transitionStart(e){
                //     console.log('s')
                // },
                // slideResetTransitionStart(e){
                //     console.log('next')
                // },
                slideChange(e) {
                    const activeIndex = e.activeIndex;
                    const previousIndex = e.previousIndex;
                    functionActiveSwiper(activeIndex);
                    if (previousIndex < activeIndex) {
                        functionActiveSwiper(activeIndex + 1)
                    } else {
                        functionActiveSwiper(previousIndex)
                    }

                    // console.log(previousIndex)
                    // content(previousIndex);
                    setTimeout(function () {

                        // functionActiveSwiper(activeIndex + 1)
                        // functionActiveSwiper(activeIndex);
                        // createSlides(activeIndex);
                        // functionActiveSwiper()
                    }, 0)
                }
            }
        });
        // cubeSwiper.on('touchStart', function() {
        //
        //
        //     console.log('start')
        //
        // });
        // cubeSwiper.on('touchEnd', function () {
        //
        //     const activeIndex = this.activeIndex;
        //     content(this.previousIndex);
        //     createSlides(activeIndex);
        //     functionActiveSwiper()
        //     console.log('end')
        // })
    }


    function setCookies() {
        let seenSlide = $('.storiesSwiper .swiper-slide').eq(cubeSwiper.activeIndex).index()
        document.cookie = 'seen_slide_' + seenSlide + '=true; expires=' + new Date(new Date().getTime() + 5 * 1000) + '; path=/';
    }

    function functionActiveSwiper(index) {


        activeSwiper = new Swiper(`.mySwiper-${index}`, {
            nested: true,
            loop: false,
            preventClicksPropagation: true,
            preventClicks: false,
            // autoplay: {
            //     delay: speed,
            //     disableOnInteraction:true,
            //
            // },
            touchMoveStopPropagation: true,
            touchStartForcePreventDefault: true,
            pagination: {
                el: `.swiper-pagination-${index}`,
                clickable: true,
                type: 'bullets',
                renderBullet: function (index, className) {
                    return '<div class="' + className + '">' + '<b data-index="' + index + '"></b>' + '</div>';
                },

            },
            on: {
                init(e) {
                    e.autoplay.stop();
                    // runProgress()
                    $(`.mySwiper-${index}`).on("click", function (event) {
                        var linkElement = $(event.target).closest('a.story-link'); // Check if the clicked element or its parent is a link

                        if (linkElement.length && linkElement.closest(`.mySwiper-${index}`).length) {
                            // If the clicked element or its parent is a link inside .mySwiper, do nothing or perform specific actions for links
                            return;
                        }

                        if (timeDelta < 0.5) {
                            var offset = $(`.mySwiper-${index}`).offset();
                            var relativeX = (event.pageX - offset.left);
                            if (e.activeIndex === 0 && cubeSwiper.activeIndex !== 0 && relativeX < (e.width / 2)) {
                                cubeSwiper.slidePrev();
                                // imageLoaded();
                            }
                            //go to prev slide prev click on slider
                            if (relativeX < (e.width / 2)) {
                                e.slidePrev();
                                // imageLoaded();
                                //go to next slide after click on slider
                            } else {
                                e.slideNext();
                                // imageLoaded();
                                if (e.isEnd) {

                                }
                            }
                        } else {

                            return false
                        }
                    })
                },
                touchStart() {
                    //hold finger on slider and pause animation play state
                    startTime = Date.now() / 1000;
                    // activeSwiper.autoplay.stop();
                    // activeSwiper.autoplay.pause();

                    $('.swiper-pagination-bullet-active b').css("animationPlayState", "paused");

                },
                touchEnd() {
                    //touch end on slider and run animation play state
                    var endTime = Date.now() / 1000;
                    timeDelta = endTime - startTime;
                    $('.swiper-pagination-bullet-active b').css("animationPlayState", "running");
                    // activeSwiper.autoplay.start();
                    // activeSwiper.autoplay.run();

                },

                slideChange(e) {
                    // activeSwiper.autoplay.stop();
                    for (let i = 0; i < $(`.mySwiper-${index} b`).length; i++) {
                        if ($(`.mySwiper-${index} b`).eq(i).attr('data-index') < $('.mySwiper .swiper-pagination-bullet-active b').attr('data-index')) {
                            $(`.mySwiper-${index} .swiper-pagination-bullet`).eq(i).css({'background-color': 'white'})
                            $(`.mySwiper-${index} .swiper-pagination-bullet`).eq(i).css({'opacity': '1'})
                        } else {
                            //change background of progressbar after change active class(black background with 1 opacity)
                            $(`.mySwiper-${index} .swiper-pagination-bullet`).eq(i).css({'background-color': 'rgba(255,255,255,0.4)'})
                            $(`.mySwiper-${index} .swiper-pagination-bullet`).eq(i).css({'opacity': '1'})
                        }

                    }

                    if (e.isEnd) {
                        setCookies();
                        $('.storiesSwiper .swiper-slide .storiesSwiperImg').eq(cubeSwiper.activeIndex).addClass('seen');

                        if (cubeSwiper.isEnd) {
                            setTimeout(function () {
                                closeStory()
                            }, speed);
                        }
                        let clicked = false;
                        let lastClicked;

                        if (!clicked) {
                            lastClicked = setTimeout(function () {
                                cubeSwiper.slideNext();
                            }, speed);
                        }
                        // setTimeout(function () {
                        //     cubeSwiper.slideNext();
                        // }, speed);
                        // reorderStoriesSlides();
                        //
                        // function reorderStoriesSlides() {
                        //     const $storiesSlides = $('.storiesSwiper .swiper-slide');
                        //
                        //     $storiesSlides.sort(function (a, b) {
                        //         const hasSeenClassA = $(a).find('.storiesSwiperImg').hasClass('seen');
                        //         const hasSeenClassB = $(b).find('.storiesSwiperImg').hasClass('seen');
                        //
                        //         if (hasSeenClassA && !hasSeenClassB) {
                        //             return 1; // Move the slide with 'seen' class to the end
                        //         } else if (!hasSeenClassA && hasSeenClassB) {
                        //             return -1; // Keep the order for slides without 'seen' class
                        //         } else {
                        //             return 0; // Keep the order for slides without 'seen' class
                        //         }
                        //     });
                        //
                        //     $('.storiesSwiper .swiper-wrapper').html($storiesSlides);
                        // }
                        //change slide storyFullSwiper on last slide (auto)


                        // change slide storyFullSwiper on last slide of swiper (with click)

                        $(`.mySwiper-${index}`).on("click", function (event) {
                            clicked = true;
                            clearTimeout(lastClicked);
                            // clearTimeout(lastSlideAutoplay);
                            // clearTimeout(lastSlideOfStoryFull);

                            var offset = $(`.mySwiper-${index}`).offset();
                            var relativeX = (event.pageX - offset.left);
                            if (cubeSwiper.isEnd) {
                                if (timeDelta < 0.5 && relativeX > (e.width / 2)) {
                                    closeStory()
                                }
                            } else {
                                if (timeDelta < 0.5 && relativeX > (e.width / 2)) {
                                    cubeSwiper.slideNext();
                                    // imageLoaded();
                                }

                            }
                        })

                        // change slide storyFullSwiper on first slide of swiper (with click when back to first slide from last slide)
                    } else if (e.isBeginning) {
                        $(`.mySwiper-${index}`).on("click", function (event) {

                            var offset = $(`.mySwiper-${index}`).offset();
                            if (offset && offset !== null) {

                                var relativeX = (event.pageX - offset.left);
                                if (timeDelta < 0.5 && relativeX < (e.width / 2)) {
                                    cubeSwiper.slidePrev();
                                    // imageLoaded();
                                }
                            }
                        })

                    }
                },
                transitionEnd(e) {
                    // activeSwiper.autoplay.start();
                }
            }
        });
        // setTimeout(function () {
        //     $('.swiper-pagination-bullet b').css('animation-duration', `${speed}ms`).css('background-color', 'white');

        // }, 100);
        // $(`.swiper-pagination-${index} .swiper-pagination-bullet b`).css('animation-duration', `${speed}ms`).css('background-color', 'white');
        $(`.mySwiper-${index}.swiper-slide img`).on('contextmenu', function (event) {
            event.preventDefault();
        });
        return activeSwiper;
    }


    function adjustWidthAtBreakpoint() {
        if ($(window).width() <= 768) { // Adjust the breakpoint as needed
            $('.cubeSwiper').animate({width: '100%'});

        }
    }

// //create cube swiper
    function createCubeSwiper() {
        //create storiesSlides
        let cubeSwiper = `
        <div class="swiper cubeSwiper">
        <div class="swiper-wrapper"></div>
        <button type="button" class="closeBtn">&#x2715</button>
        </div>`;

        let overlay = ` <div class="overlay"></div>`


        fullSwiper.addClass('active').append(cubeSwiper).append(overlay);
        $('.overlay').addClass('active')


        allStories.forEach((story, index) => {
            let slideHTML = createSlides(index); // Generate slide HTML content
            let slideDiv = $('<div class="swiper-slide"></div>'); // Create a div for the slide
            slideDiv.html(slideHTML); // Set the generated HTML content to the slide div
            $('.cubeSwiper .swiper-wrapper').eq(0).append(slideDiv); // Append the slide div to the swiper-wrapper


        });

        initCubeSwiper();

        setTimeout(function () {
            adjustWidthAtBreakpoint()
        }, 0);

        // createSlides(0);
        // functionActiveSwiper();


        // imageLoaded();
        // $('.swiper-pagination-bullet b').css('animation-duration', `${speed}ms`).css('background-color', 'white');


        $('.cubeSwiper .closeBtn').on("click", function () {
            closeStory()
        })

    }


    // $('.full-swiper').click(function (event) {
    //     var target = $(event.target);
    //     if (!target.closest('.cubeSwiper').length && !target.is('.cubeSwiper') && !target.closest('.mySwiper').length && !target.is('.mySwiper')) {
    //         closeStory()
    //     }
    // });
    $(document).mousedown(function (e) {
        var cube = $(".cufbeSwiper");
        var cubescontainer = $('.swiper-container');
        if (!cube.is(e.target) && cube.has(e.target).length === 0 && !cubescontainer.is(e.target) && cubescontainer.has(e.target).length === 0) {
            closeStory();
        }
    });

    function closeStory() {
        $('.overlay').removeClass('active')
        $('.cubeSwiper').animate({top: '100%'}, function () {
            fullSwiper.removeClass('active').empty();
        });
    }

// Function to create nested slides
    function createNestedSlides(imageUrls) {

        return imageUrls.map(item => {
            const linkElement = item.link ? `<a href="${item.link}" class="story-link" target=”_blank”>buy now</a>` : '';
            return `
            <div class="swiper-slide">
                <img src="${item.img}" alt="" loading="lazy">
                ${linkElement}
                <div class="swiper-lazy-preloader"></div>
            </div>
        `;
        }).join('');
    }


    // function imageLoaded() {
    //     const images = document.querySelectorAll('.mySwiper .swiper-slide img');
    //
    //     let allImagesLoaded = true;
    //     images.forEach(img => {
    //         if (!img.complete) {
    //             allImagesLoaded = false;
    //             activeSwiper.autoplay.stop();
    //             img.addEventListener('load', runProgress);
    //         }
    //     });
    //
    // }

    // function runProgress() {
    //     $('.swiper-pagination-bullet b').css('animation-duration', `${speed}ms`).css('background-color', 'white');
    // console.log('load')
    // activeSwiper.autoplay.start();
    // }


    // functionActiveSwiper(0);


    function createSlides(index) {
        const story = allStories[index];
        const swiperClassName = `swiper mySwiper mySwiper-${index}`; // Generate dynamic class name
        const paginationClassName = `swiper-pagination swiper-pagination-${index}`;

        const slideHTML = `
        <div class="profilePhoto"><img src="${story.thumbUrl}" alt="${story.name}"><span>${story.name}</span><span class="lastUpdate">2 min</span></div>
        <div class="${swiperClassName}">
              <div class="swiper-wrapper">
                ${createNestedSlides(story.imageUrl)}
              </div>
              <div class="${paginationClassName}"></div>
            </div>
        </div>
        </div>
      `;

        return slideHTML;

    }


    function content(index) {
        let img = allStories[index].imageUrl[0].img
        $('.cubeSwiper .swiper-slide').eq(index).html(`<img src="${img}">`)
    }

})
;