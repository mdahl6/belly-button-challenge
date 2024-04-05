// establish the url of the data to be used (provided by the challenge)
const url = 'https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json';

// create empty arrays to be filled by the json data
let names = [];
let metadata = [];
let samples = [];

// access the data and add the various data to the proper array
d3.json(url).then(function(data) {
    
    for (let i=0; i < data.names.length; i++){
        names.push(data.names[i])
        metadata.push(data.metadata[i])
        samples.push(data.samples[i]);
    }
    

    console.log(metadata[0].age);
});

//console.log(metadata[0].age);


// create an initial graph when page loads
function init() {
    let defaultSample = samples[0]["sample_values"];
    let defaultOtu_id = samples[0]["otu_ids"];
    let defaultOtu_label = samples[0]["otu_labels"];
    
    let defaultTrace = [
        {
            type: 'bar',
            orientation: 'h',
            x: defaultSample,
            y: defaultOtu_id,
            text: defaultOtu_label
        }
    ];
    let initialData = [defaultTrace];
    updatePlotly.newPlot('intialplot', initialData);
};

// populate dropdown menu with the 'names' array


// create function that reads what name is selected in the dropdown

    // search samples and metadata by the selected name ('name' will be 'id' in both metadata and samples)

    // create arrays of the sample_values, otu_ids, otu_labels from the selected objects

    // use this to display the horizontal bar chart

    // use the search result arrays to create the bubble chart

    // display the metadata within the demographic info box

