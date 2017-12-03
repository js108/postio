import React from 'react'
import deepFreeze from 'deep-freeze'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.React = React
global._testPosts = deepFreeze([
    {
      "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
      "user": "UtilityLimb",
      "avatar": "bandit.png",
      "text": "Programming Skills: PRIMARILY RUBY AND PYTHON BUT I CAN USE ANY TYPE OF GEM TO CONTROL ANY TYPE OF SNAKE",
      "rating": 0,
      "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)",
      "link": "https://twitter.com/utilitylimb/status/126780301211992064"
    },
    {
      "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
      "user": "conortripler",
      "avatar": "connor.jpg",
      "text": "*sits 27 hours for an oil on canvas portrait* omg delete that. Bartholomew im serious do not fucking hang that in the Great Hall",
      "rating": 0,
      "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)",
      "link": "https://twitter.com/conortripler/status/671106116768555008"
    },
    {
      "id": "58d9caee-6ea6-4d7b-9984-65b145031979",
      "user": "vineyille",
      "avatar": "vineyille.jpeg",
      "text": "[whispering to date while watching Chappie when Chappie first appears on the screen] That's Chappie",
      "rating": 0,
      "timestamp": "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
      "link": "https://twitter.com/vineyille/status/580036338164039681"
    }
	])