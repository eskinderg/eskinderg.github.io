import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageServiceMock {
    public sections = {
        intro: null
    };

    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    @Output() languageChange: EventEmitter<object> = new EventEmitter<object>();

    @Output() public httpChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    private langList: any = [
        {
            CountryCode: 'GB',
            title: 'English',
            code: 'en',
            icon: '',
            font: 'Raleway'
        },
        {
            CountryCode: 'ET',
            title: 'አማርኛ',
            code: 'am',
            icon: '',
            font: 'wookianos'
        }
    ];

    public texts: any = {
        font: {
            body: 'Raleway',
            title: {
                fontFamily: 'Raleway',
                fontWeight: 400
            },
            intro: 'Raleway',
            menu: 'Raleway',
            outlineMenu: {
                fontFamily: 'Raleway',
                fontWeight: 600
            },
            content: 'Raleway'
        },
        menu: {
            tooltip: 'Main Menu',
            list: [
                {
                    name: 'About Me',
                    link: 'about'
                },
                {
                    name: 'Technologies',
                    link: 'expertin'
                },
                {
                    name: 'Accomplishments',
                    link: 'accomplishments'
                },
                {
                    name: 'Experience',
                    link: 'experience'
                },
                {
                    name: 'Education',
                    link: 'education'
                },
                {
                    name: 'Contact Me',
                    link: 'contact'
                }
            ]
        },
        intro: {
            title: 'Eskinder Getahun',
            subtitle: 'Full-Stack Developer'
        },
        about: {
            title: 'About Me',
            content: [
                "As confirmed by my portfolio content and <a href='https://github.com/eskinderg' target='_blank'>code</a>, I combine my knowledge and experience in order to develop professional web applications. I use the best practice to produce a clean code that is easy to debug and maintain.",
                'I have a passion for web development and continue to learn the latest technological advancements.'
            ],
            button: {
                title: 'Download CV',
                tooltip: 'Download CV'
            },
            pdf: 'Adobe Acrobat (pdf)',
            word: 'Word Document (docx)'
        },
        technologies: {
            title: 'Technologies',
            content: '',
            masteries: [
                {
                    title: 'Angular',
                    img: 'bg-angular',
                    link: 'https://angular.io'
                },
                {
                    title: 'TypeScript',
                    img: 'bg-typescript',
                    link: 'https://www.typescriptlang.org'
                },
                {
                    title: 'Javascript',
                    img: 'bg-javascript',
                    link: 'https://www.javascript.com'
                },
                {
                    title: 'jQuery',
                    img: 'bg-jquery',
                    link: 'https://www.jquery.com'
                },
                {
                    title: 'CSS3',
                    img: 'bg-css',
                    link: 'https://www.w3schools.com/css/'
                },
                {
                    title: '.net core',
                    img: 'bg-netcore',
                    link: 'https://dotnet.microsoft.com'
                },
                {
                    title: 'Git',
                    img: 'bg-git',
                    link: 'https://git-scm.com'
                },
                {
                    title: 'Gulp',
                    img: 'bg-gulp',
                    link: 'https://gulpjs.com'
                },
                {
                    title: 'Karma',
                    img: 'bg-karma',
                    link: 'https://karma-runner.github.io'
                },
                {
                    title: 'Facebook SDK',
                    img: 'bg-facebook',
                    link: 'https://developers.facebook.com/'
                },
                {
                    title: 'Google API',
                    img: 'bg-google',
                    link: 'https://developers.google.com'
                },
                {
                    title: 'Bootstrap',
                    img: 'bg-bootstrap',
                    link: 'https://getbootstrap.com'
                },
                {
                    title: 'Angular Material',
                    img: 'bg-angularmat',
                    link: 'https://material.angular.io/'
                },
                {
                    title: 'Node JS',
                    img: 'bg-foundation',
                    link: 'https://nodejs.org/'
                },
                {
                    title: 'HTML5',
                    img: 'bg-html',
                    link: 'https://www.w3schools.com/html/'
                },
                {
                    title: 'PHP',
                    img: 'bg-php',
                    link: 'https://www.php.net/'
                },
                {
                    title: 'C#',
                    img: 'bg-mongo',
                    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
                },
                {
                    title: 'MySQL',
                    img: 'bg-mysql',
                    link: 'https://www.mysql.com/'
                },
                {
                    title: 'Photoshop',
                    img: 'bg-photoshop',
                    link: 'https://www.adobe.com/products/photoshop.html'
                },
                {
                    title: 'MS SQL',
                    img: 'bg-illustrator',
                    link: 'https://learn.microsoft.com/en-us/sql/'
                },
                {
                    title: 'Webpack',
                    img: 'bg-webpack',
                    link: 'https://webpack.js.org/'
                },
                {
                    title: 'Sass',
                    img: 'bg-sass',
                    link: 'https://sass-lang.com/'
                },
                {
                    title: 'Tailwind CSS',
                    img: 'bg-tailwind',
                    link: 'https://tailwindcss.com/'
                }
            ]
        },
        projects: {
            title: 'PROJECTS',
            projects: [
                {
                    title: 'Or-co.gr',
                    subtitle: '2017',
                    img: 'bg-orco'
                },
                {
                    title: "Book'n'Bloom",
                    subtitle: '2016 - 2017',
                    img: 'bg-booknbloom'
                },
                {
                    title: 'Media Ram',
                    subtitle: '2016',
                    img: 'bg-media-ram'
                },
                {
                    title: 'Inrealty.gr',
                    subtitle: '2015',
                    img: 'bg-inrealty'
                },
                {
                    title: 'Swinburne ',
                    subtitle: '2014',
                    img: 'bg-swinburne'
                },
                {
                    title: 'Sonon website',
                    subtitle: '2013',
                    img: 'bg-sonon'
                },
                {
                    title: 'Tap it right!',
                    subtitle: '2012',
                    img: 'bg-tapitright'
                },
                {
                    title: 'Help!!!',
                    subtitle: '2011',
                    img: 'bg-help'
                },
                {
                    title: 'Thesis',
                    subtitle: '2008',
                    img: 'bg-thesis'
                }
            ],
            button: 'Load more'
        },
        accomplishments: {
            title: 'Accomplishments',
            content: [
                {
                    title: '2013-2014',
                    paragraph:
                        'Developed different websites using WordPress, OpenCart and other Open-Source platforms'
                },
                {
                    title: '2016',
                    paragraph:
                        'Participated in an OAuth implementation for users role and permission using JWT (JSON Web Token)'
                }
            ]
        },
        experience: {
            title: 'Experience',
            content: [
                {
                    title: 'Freelance Web Developer (Full Stack)',
                    subtitle: 'Elance',
                    year: 'Sept 2018 - Present',
                    intro: 'Freelance',
                    elements: [
                        {
                            type: 'list',
                            header: 'Key responsibilities include, but not limited to:',
                            list: [
                                'Provided support for different websites ',
                                'Created Single Page Applications by using web technologies like HTML5, SASS, Typescript, Angular2 and Bootstrap.',
                                'Created and used Reducers that received Actions to modify the store State.',
                                'Created custom NPM modules.',
                                'Developed administrative UI Components using Angular2+, Typescript and Webpack',
                                'Used Bootstrap for Responsive Web design.',
                                'Optimized Front-End assets for speed and performance',
                                'Used Middleware, Redux-Promise in an application to retrieve data from Back-End RESTFUL service.',
                                'Created custom Angular Components including Breadcrumbs, Reactive Forms, Form Validators, Tabbed Components and Toggle Buttons.'
                            ]
                        }
                    ],
                    used: [
                        'Angular',
                        'Typescript',
                        'JQuery',
                        'Java Script',
                        'Bootstrap',
                        'Node JS',
                        'HTML5',
                        'Sass'
                    ]
                },
                {
                    title: 'Web Developer (Front-End)',
                    subtitle: 'Front-End, Nuaxis.',
                    year: 'Aug 2016 - Jul 2018',
                    intro: 'Nuaxis',
                    elements: [
                        {
                            type: 'list',
                            header: 'Key responsibilities include, but not limited to:',
                            list: [
                                'Created programs as per user / design requirements using AngularJS',
                                'Collaborated with cross-functional teams (DEV, UX/UI & BA) to define, design, and deliver creative digital solutions',
                                'Utilized automated unit and integration tests for application life cycle',
                                'Executed Agile Development techniques',
                                'Utilized industry best practices to create effective business solutions for clients',
                                'Participated towards senior-level technology discussions',
                                'Created web forms using bootstrap.',
                                'Used Git flow techniques for feature branching, merging and continuous integration',
                                'Implemented google analytics using angularitics',
                                'Participated on OAuth implementation for user’s role and permissions using JWT (JSON web token)',
                                'Created migration scripts for Postgres database systems using Sequelize-CLI ORM',
                                'Consumed backend RESTful API services',
                                'Produced reports and statistical information for managers using code climate, and mocha testing framework',
                                'Used bootstrap CSS to create, modify and update web layouts',
                                'Created angular 1.5 components, directives and filters',
                                'Used Node JS schema validator for back-end validation',
                                'Utilized automated integration tests for application life cycle',
                                'Performed unit and integration test for front-end and back-end systems using AngularJS and NodeJS'
                            ]
                        }
                    ],
                    used: [
                        'Angular',
                        'Typescript',
                        'Javascript',
                        'jQuery',
                        'HTML5',
                        'Sass',
                        'Bootstrap',
                        'Google API',
                        'Gulp',
                        'OAuth',
                        'NodeJS',
                        'Postgres SQL',
                        'Git'
                    ]
                },
                {
                    title: 'Software Engineer II',
                    year: 'Nov 2015 - Aug 2016',
                    intro: 'Bloomberg BNA',
                    elements: [
                        {
                            type: 'list',
                            header: 'Key responsibilities include, but not limited to:',
                            list: [
                                'E-Commerce development using Agile methodologies',
                                'Full Stack web development using ASP .Net MVC, C#, Angularjs and MSSQL.',
                                'Provided support for internal web application in facilitation of web application migration.',
                                'Integrated Asp MVC with Ektron system',
                                'Designed modern architectural patterns for new and legacy systems.',
                                'Provided architectural patterns for intranet systems.',
                                'Wrote Front-end and Back-end Unit Tests for code refactoring and continuous deployment process.'
                            ]
                        }
                    ],
                    used: [
                        'Angular',
                        'Javascript',
                        'jQuery',
                        'HTML5',
                        'Sass',
                        'Bootstrap',
                        'C#',
                        'ASP MVC',
                        'Entity Framework',
                        'Gulp',
                        'OAuth',
                        'MSSQL',
                        'Git'
                    ]
                },
                {
                    title: 'Web Developer & Designer',
                    subtitle: 'Full-Stack Software Developer & Designer',
                    year: 'Jan 2015 - Nov 2015',
                    intro: '',
                    elements: [
                        {
                            type: 'list',
                            header: 'Key responsibilities include, but not limited to:',
                            list: [
                                'Full Stack development using LAMP stack.',
                                'Maintained website for most up-to date technology, software, and information',
                                'Developed and Implemented responsive User-Interface and back-end analytic tracking system',
                                'Customized, Implemented WordPress themes and plugins.',
                                'Provided support for different websites '
                            ]
                        }
                    ],
                    used: ['PHP', 'C#', 'WordPress', 'OpenCart', 'HTML5', 'JQuery', 'CSS3', 'Javascript']
                },
                {
                    title: 'Web Developer (Full Stack Developer)',
                    subtitle: 'Addis Ababa University, Ethiopia',
                    year: 'Sep 2013 - Jan 2015',
                    intro: '',
                    elements: [
                        {
                            type: 'list',
                            header: 'Key responsibilities include, but not limited to:',
                            list: [
                                'Designed visual layout of websites.',
                                'Created Stored Procedures using MSSQL.',
                                'Tested website before it goes live and identify problems.',
                                'Advised users on the functionality of website.',
                                'Changed code of an existing website using MVC, C#, Entity Framework and LINQ technologies.',
                                'Optimized web assets for optimal speed and performance',
                                'Produced reports and statistical information for senior managers'
                            ]
                        }
                    ],
                    used: [
                        'C#',
                        'MSSQL',
                        'ASP.Net',
                        'LINQ',
                        'Entity Framework',
                        'PHP',
                        'HTML5',
                        'CSS3',
                        'JavaScript',
                        'jQuery'
                    ]
                }
            ]
        },
        education: {
            title: 'Education / Trainings',
            content: [
                {
                    title: 'B.Sc in Computer Science & Information Technology',
                    subtitle: 'Arba Minch University, Arba Minch, Ethiopia',
                    img: 'bg-graduation',
                    year: '2004 - 2008'
                },
                {
                    title: 'Microsoft Certified Professional',
                    subtitle: 'Microsoft',
                    img: 'bg-microsoft',
                    year: '2014'
                },
                {
                    title: 'Microsoft Certified C# Specialist',
                    subtitle: 'Microsoft',
                    img: 'bg-microsoft',
                    year: '2014'
                }
            ]
        },
        conferences: {
            title: '',
            content: []
        },
        contact: {
            intro: 'You can contact me using my E-Mail or Phone for any website development projects.',
            input: ['NAME', 'EMAIL', 'MESSAGE'],
            mail: 'eskinderget@gmail.com',
            phone: '+251-911-184987',
            button: 'Send message'
        },
        footer: {},
        social: {
            github: 'https://github.com/eskinderg',
            stackoverflow: 'https://stackoverflow.com/users/2876957/eskinder',
            linkedin: 'https://www.linkedin.com/in/eskinderg'
        },
        languageSelect: 'Change Language',
        colorSelectTooltip: 'Change Theme Color'
    };

    loadLanguages(): any {
        return null;
    }

    setLanguage(lang: any): Observable<any> {
        return lang;
    }

    get LanguageList() {
        return this.langList;
    }
}
