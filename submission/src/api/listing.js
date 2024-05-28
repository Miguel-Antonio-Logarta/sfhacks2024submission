// export async function POST() {
//     const res = await fetch('https://data.mongodb-api.com/...', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY!,
//       },
//       body: JSON.stringify({ time: new Date().toISOString() }),
//     })

//     const data = await res.json()

//     return Response.json(data)
//   }

// Get dummy data

// lat: float
// long: float
// radius?: float in miles. Default is 2 miles
// address: string

/*
{
        [
            address: string
            name: 
            rating:
            numRatings:
            description:
            rate/price:
            long:
            lat:
            listingID:
        ]
    }
*/

function mockFetch(url, options) {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous behavior with setTimeout
    setTimeout(() => {
      // Dummy data
      const dummyData = {
        status: 200,
        data: {
          message: 'This is dummy data',
        },
      };

      // Resolve the promise with dummy data
      resolve(dummyData);
    }, 1000); // Simulate a 1-second delay
  });
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
//   const id = searchParams.get('id');
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //     headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY!,
  //     },
  // })

  const res = await mockFetch("...");
  const product = await res.json();

  return Response.json({ product });
}
