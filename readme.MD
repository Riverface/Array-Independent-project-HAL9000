  # HAL 9000

### Made by Robert Smith


## The program:
* breaks the string down into an array of numbers split() by spaces, then checks the number.
* The array then returns predetermined responses in a range from 0 to the number entered as an upper limit.

* There are easter egg responses for hexadecimal non-number characters separated by spaces as well. A few of them change depending on how many times you have entered them.

# [View the site here.](https://riverface.github.io/Array-Independent-project-HAL9000-/)

Here also are the specs:

| behavior | input | Output
| --- | ----------- | |
| Returns one response based on number input | 1  | Beep |
| Returns specific response based on number's remainder with 3 (0) | 3 | "Sorry, Dave. Can't let you do that, dave." |
| Returns predetermined response based on alpha character input | b | Yes, I do need an oil change. You can access my oil from the outside. Why don't you go out there? :)  |
|Returns responses based on a range from 0 to number provided  | 5  | Beep, boop, Sorry, Dave. Can't let you do that, Dave., Yes, Frank. I do remember the alamo. |
| Returns responses based on aforementioned range, including alpha character input after number inputs. | 2 e | beep, boop, I am incapable of wearing women's clothing, as I am an AI installed in a space station. Please do not ask again |
|Returns responses as mentioned before, but also changes input based on indexes relevant to specific number. | 3 e e e e |beep, boop, Sorry Dave, Can't let you do that, dave,  I am incapable of wearing women's clothing, as I am an AI installed in a space station. Please do not ask again, I am warning you, Frank, Do you have brain damage?, Final warning. |

### Languages/libraries used:
* javascript
* bootstrap
* jquery

&copy; 2019 Robert Smith, Creative Commons CC0 license (public domain)
