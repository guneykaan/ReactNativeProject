const config = {
    apiUrl: 'https://northwind.vercel.app/',

}

const baseManager = {
    get: async (url) => {
        let responseData;

        await fetch(config.apiUrl + url)
            .then((res) => res.json())
            .then((data) => {
                responseData = data;
            });

        return responseData;
    },

    post: async (url, data) => {

        console.log(data)

        let requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        await fetch(config.apiUrl + url, requestOptions)
            .then((res) => res.json())
            .then((data) => {
            });


    },

    put: async (url, data) => {
        let requestOptions = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        await fetch(config.apiUrl + url, requestOptions)
            .then((res) => res.json())
            .then((data) => {
            });

    },

    delete: async (url, id) => {
        let resultData;
        let requestOptions = {
            method: 'DELETE',
            body: JSON.stringify(id),
        }

        await fetch(config.apiUrl + url + "/" + id, requestOptions);
    }


}

export default baseManager;