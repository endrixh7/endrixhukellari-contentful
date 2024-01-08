# React + Vite
Tip:
# Lighthouse - Google mobile friendly test
    - Chrome extension
    - npm install

# Contentful CMS
    - What is a Headless CMS - Contentful
        - Store data in Cloud - Fetch it - Display in our React App
    - Implement web hooks
        - Make changes on clouds - changes will be applied to our React App directly and Netlify will automatically rebuild the project
# Note
    - This is a mini-project focused only how to work with Headless CMS

# Hero Component
    - We have only two components
        - Hero
            - Left will be 'text'
            - Right will be 'image'
        - Using Tailwind of course
        - Projects
    - Create and Import them

# Nice images - Undraw
    - Nice custom SVG

# Projects Data
    - data.jsx
    - copy paste from 'data.jsx' to 'contentful' content model

# Headless CMS
    - Nice GUI
    - Data can be used in multiple places through the API

## Contentful CMS
    - Create account
    - Start from scratch
    - Content Type
        - Content Model (Structure of our data)
            - Design your content model
                - Name
                - Api identifier
                - Description
            - Add fields
                - Title
                - Url
                - Image
            - Text/Short text for 'title' and 'url'
            - Image/One for 'image'
        - Content - adding entries
            - Add new entry
                - Copy and Paste from the data.js
                - Gotcha process - after the image is uploaded you must publish the image first, then publish the entry
            - Add more entries (3 more left)
            - Navigate
                - Projects is our Content Model that we created before
            Done ✅

# Contentful API Docs
    - Space ID & Delivery Access Token, Content Preview API
        - coo9z6km6uj7
        - iqI2Su7fieIZcukqF1ozWsxY6DHUfiuNrWyNPfV3ZFg
        - 7e1133Vq8yQZvamxiGUQDhFQCFoOdN-b1lB0wIfcBJ4
    - Settings 
        - API Keys
    - Most used
        - SDK install
        - Content Delivery API
        - Entries
            - get all entries
            - get only one entry
                - using axios
            - Search Parameters
        - Using Promises or Async/Await

# Contentful SDK - Install and Setup
    - npm i contentful
    - create FetchProjects.jsx
    - import 'createClient'
    - create instance
    - get entries using Promises or Async/Await
    - Import FetchProjects to Projects
        - Now, make sure that server is running
        - open the dev tools and go to console and you will see an object
        - it mean we have access to contentful ✅

# Fetch Projects
    - create custom hook on FetchProjects{
        - we need useEffect
            - loading, setLoading equal to true
            - projects, setProjects equal to empty array
            - create an aysnc arrow effect getData()
                - try to get the response
                    - setLoading(false)
                    - Challenge (Iterate over items, pull our these 4 properties: title, url, id, image) tip: images are more nested
                    - const response = await client.getEntries({content type: 'projects'});
                    - const projects = response.items.map((item)=>{
                        // Destructure
                        const { title, url, image } = item.fields
                        // Grab the id
                        const id = item.sys.id
                        // Grab the image using conditional if it exist or not
                        const img = image?.fields.file?.url
                        return {title, url, id, img}
                        // Now that I have these let set the state to the projects
                    })
                    setProjects(projects)
                    setLoading(false)
                - catch error
                    - clg(error)
                    - setLoading(false)
                - parse the response 
        - invoke useEffect
            useEffect(()=>{
                - invoke getData()
                getData()
            },[])
                return {loading, projects};
            };
        - export useFetchProjects

    - No go to Projects.jsx and import useFetchProjects
        - import useFetchProjects from './fetchProjects'
    - Inside the component display
        - const { loading, projects } = useFetchProjects()
        - clg(loading, projects)
    - Open DevTools and check
        - true > []
        - false > 4 [{...}, {...}, {...}, {...}]
    - Boom Data is here, now we only have to render it to our App

# Render Projects
    - Now lets set up two conditions
        - one for loading
        - one for loading is false
    - We are going to set nice card for each project
    - if (loading) {
        return <section className=''projects>
            <h2> Loading... </h2>
         </section>
    }

    return (
        <section className='projects'> 
            <div className='title'>
                h2 projects
                div className='title-underlined'
            </div>
            div
                {projects.map((project)=>{
                    // Destructure
                    const {id, img, url, title} = project;
                    return <a properties>
                        img 
                        h5 title
                    </a>
                })}
        </section>
    )

    - Take a look at project now

# Deploy
    - What are webhooks?
        - Dynamically build our project on Netlify 
    - Before deploy init .env and store the keys
        - add .env to .gitignore
    - git init
    - git push
    - deploy to Netlify
        - Show advanced
            - new variable
                [key = name] [value = value] // take it from .env file
    - Deploy site
        - if dont work
                - clear cache and deploy

# Webhooks
    - Go to 'site overview' on Netlify
    - Go to Build and Deploy
        - Build Hooks
            - Add build hook
            - Unique URL to trigger a build
            - Build hook name
                - Contentful CMS
            - Save
                - Copy the URL
    - Go to 'Contentful'
        - Settings
            - Webhooks
            - Add Webhooks
                - Set name -> Netlify hook
                - URL -> Paste the URL copied from Netlify
            - Trigger for all events (this option will costs us all our 'free minutes')
            or
            - Select specific triggering events
        - Save
    - Lets test it
        - On Contentful of course
        - Go to one of projects and change the 'title'
            - Publish
    - Now quickly go to Netlify
        - Deploys
            - Take a look:
                Production: main@HEAD Building
                Deploy triggered by hook: Contentful CMS 
            - Click on Production to see logs
    - Go to website and check the title

# CSS optional


