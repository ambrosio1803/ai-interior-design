export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = new FormData();
    formData.append("version", "db21e45b5e6b468b992d41653dbf6e6df0d05c65ef1b5e5f38c7fef16b1a9c18");
    formData.append("input", JSON.stringify({
      image: "https://replicate.delivery/pbxt/Fx9eIEYeCjUdWWqOSN1FAmkVjXEQN3VNx8ZAdyDtD57zylTJA/out-0.png",
      style: "modern"
    }));

    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Authorization": "Token r8_3UFLSBnl9IduabDM15blN1nBXFG1tmB08vp1R",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "db21e45b5e6b468b992d41653dbf6e6df0d05c65ef1b5e5f38c7fef16b1a9c18",
        input: {
          image: "https://replicate.delivery/pbxt/Fx9eIEYeCjUdWWqOSN1FAmkVjXEQN3VNx8ZAdyDtD57zylTJA/out-0.png",
          style: "modern"
        }
      })
    });

    const result = await response.json();
    res.status(200).json({ output: result.urls.get });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}