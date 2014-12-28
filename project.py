from project_module import project_object, image_object, link_object, challenge_object

p = project_object('image_fader', 'Image fader')
p.domain = 'http://www.aidansean.com/'
p.path = 'image_fader'
p.preview_image_ = image_object('http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg', 408, 287)
p.github_repo_name = 'image_fader'
p.mathjax = True
p.links.append(link_object(p.domain, 'image_fader/', 'Live page'))
p.introduction = 'This is a simple script that fades an image to a given color and transparency.  It\'s used to make images for use in web design (for example, a background image that needs to fade to match the background color.)'
p.overview = '''This was made to edit the background images on my website.'''

p.challenges.append(challenge_object('Due to lack of time it only fades from the top at the moment.', 'The other three directions will be added as needed!', 'To be revisited.'))
