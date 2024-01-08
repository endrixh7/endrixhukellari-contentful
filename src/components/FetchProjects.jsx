/* eslint-disable no-unused-vars */
// Import/Require contentful
import { createClient } from "contentful";
import { useState, useEffect } from "react";


// create instance

const client = createClient({
    space: 'coo9z6km6uj7',
    environment: 'master',
    accessToken: 'iqI2Su7fieIZcukqF1ozWsxY6DHUfiuNrWyNPfV3ZFg',
});


// Fetching projects
export const useFetchProjects = () => {
    // Processing the data time
    const [loading, setLoading] = useState(true);
    const [projects, setProjects ] = useState([]);

    // Get data from Contentful
    const getData = async() => {
        try {
            const response = await client.getEntries({content_type:'projects'});
            const projects = response.items.map((item)=>{
                const {title, url, image} = item.fields;
                const id = item.sys.id;
                // Taking img from a nested object using ? for conditional
                const img = image?.fields?.file?.url
                return {title, url, img}
            });
            setProjects(projects)
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=> {
        getData();
    },[]);
    return {loading, projects}
};

// Get entries - mutliple entries
// Go to projects and import FetchProjects

