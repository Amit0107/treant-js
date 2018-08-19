var config = {
        container: "#basic-example",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    ceo = {
        text: {
            name: "Utkarsh Singh",
            title: "Chief executive officer",
            contact: "Tel: 01 213 123 134",
        },
        image: "../headshots/2.png"
    },

    cto = {
        parent: ceo,
        text:{
            name: "Ronak Khandelwal",
           title: "President",
           contact: "Tel: 01 213 123 134",
        },
        stackChildren: true,
        image: "../headshots/1.png"
    },
    cbo = {
        parent: ceo,
        stackChildren: true,
        text:{
            name: "Ayushi Mishra",
            title: "Director of Partnerships",
            contact: "Tel: 01 213 123 134",
        },
        image: "../headshots/5.png"
    },
    
    cdo = {
        parent: ceo,
        text:{
            name: "Raghav Palriwala",
            title: "Chief Strategy Officer",
            contact: "Tel: 01 213 123 134",
        },
        image: "../headshots/6.jpg"
    },

    cio = {
        parent: ceo,
        text:{
            name: "Sajil KR",
             title: "Director of Geospatial Intelligence",
             contact: "Tel: 01 213 123 134"
        },
        image: "../headshots/8.jpg"
    },
    
    ciso = {
        parent: cio,
        text:{
            name: "Bala G",
            title: "GIS Developer",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
        image: "../headshots/11.jpg"
    },
    ciso6 = {
        parent: cio,
        text:{
            name: "Rishi",
            title: "GIS Developer",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
        image: "../headshots/11.jpg"
    }
    cio2 = {
        parent: cdo,
        text:{
            name: "Shivam Singh",
            title: "Sales Associate",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
      
        image: "../headshots/11.jpg"
    },
    cio3 = {
        parent: cdo,
        text:{
            name: "Nivesh Dwivedi",
            title: "Sales Associate",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
      
        image: "../headshots/11.jpg"
    },
    ciso2 = {
        parent: cbo,
        text:{
            name: "Shahzad Ahmad",
            title: "Full Stack Developer",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
        image: "../headshots/11.jpg"
    },
    ciso3 = {
        parent: cbo,
        text:{
            name: "Bharat Chandra Sahoo ",
            title: "Full Stack Developer",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
        image: "../headshots/11.jpg"
    },
    ciso4 = {
        parent: cbo,
        text:{
            name: "Rahul Prasad",
            title: "Full Stack Developer",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
        image: "../headshots/11.jpg"
    }
    ciso5 = {
        parent: cbo,
        text:{
            name: "Amit Kumar Manjhi",
            title: "Full Stack Developer",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
        image: "../headshots/11.jpg"
    }

    chart_config = [
        config,
        ceo,
        cto,
        cbo,
        cdo,
        cio,
        ciso,
        cio2,
        cio3,
        ciso2,
        ciso3,
        ciso4,
        ciso5,
        ciso6
    ];




    // Another approach, same result
    // JSON approach

/*
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1'
            }
        },
        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            image: "../headshots/2.jpg",
            children: [
                {
                    text:{
                        name: "Joe Linux",
                        title: "Chief Technology Officer",
                    },
                    stackChildren: true,
                    image: "../headshots/1.jpg",
                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                            image: "../headshots/8.jpg"
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                            image: "../headshots/9.jpg"
                        }
                    ]
                },
                {
                    stackChildren: true,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    image: "../headshots/5.jpg",
                    children: [
                        {
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                            image: "../headshots/7.jpg"
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                            image: "../headshots/4.jpg"
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                            image: "../headshots/11.jpg"
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    image: "../headshots/6.jpg",
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                            image: "../headshots/10.jpg"
                        }
                    ]
                }
            ]
        }
    };

*/