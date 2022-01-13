import {MovieModel} from '../models';

export let movieItems: MovieModel[] = [
    {
        description: 'The ultimate in alien terror', title: 'The Thing',
        actors: ['Kurt Russel', 'Wilford Brimley', 'T.K. Carter', 'David Clennon',
            'Keith David', 'Richard Dysart'],
        directorCredit: 'John Carpenter\'s',
        directedBy: 'John Carpenter',
        producedBy: 'Lawrence Turman',
        extraDescription: ['Man is The Warmest Place to Hide.', 'Anytime. Anywhere. Anyone.']
    },
    {
        description: 'Don\'t get him wet, keep him out of bright light, and never feed him after midnight.', title: 'Gremlins',
        actors: ['Zach Galligan','Phoebe Cates', 'Hoyt Axton',
            'Polly Holliday',
            'Frances Lee McCain', 'Judge Reinhold'],
        directorCredit: 'Steven Spielberg presents',
        directedBy: 'Joe Dante',
        producedBy: 'Michael Finnell',
        extraDescription: ['What you see... isn\'t always what you get.', 'They didn\'t obey the rules!']
    },
    {
        description: 'No one believes the truth...or lives to tell it.', title: 'Child\'s Play',
        actors: ['Brad Dourif', 'Catherine Hicks', 'Chris Sarandon', 'Alex Vincent', 'Dinah Manoff'],
        directorCredit: 'MGM presents',
        directedBy: 'Tom Holland',
        producedBy: 'Don Mancini',
        extraDescription: ['This doll is killer', 'He wants YOU for a new best friend...']
    },
    {
        description: 'The trick was to stay alive', title: 'Halloween',
        actors: ['Jamie Lee Curtis', 'Donald Pleasence', 'Nick Castle', 'Tony Moran', 'Will Sandin'],
        directorCredit: 'John Carpenter\'s',
        directedBy: 'John Carpenter',
        producedBy: 'Debra Hill',
        extraDescription: ['Everyone is entitled to one good scare', 'Trick or treat... or die']
    },
    {
        description: 'It started in May, in a small town. And every month after that, whenever the moon was full...it came back', title: 'Silver Bullet',
        actors: ['Gary Busey', 'Everett McGill', 'Corey Haim', 'Megan Follows', 'Terry O\'Quinn'],
        directorCredit: 'Stephen King\'s',
        directedBy: 'Dan Attias',
        producedBy: 'Dino De Laurentiis & Martha De Laurentiis',
        extraDescription: ['When darkness falls, terror rises.', 'Part human. Part wolf. Total terror.']
    }
]
