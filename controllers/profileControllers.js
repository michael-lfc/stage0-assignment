import axios from "axios";

export const getProfile = async (req, res) => {
    try {
        const response = await axios.get
        ("https://catfact.ninja/fact", { timeout : 5000})
        const catFact = response.data.fact

        res.status(200).json({
            status: "success",
            user: {
                email: process.env.EMAIL,
                name: process.env.NAME,
                stack: process.env.STACK,
            },
            timestamp: new Date ().toISOString(),
            fact: catFact,
        });
    } catch (error) {
        console.error("Error fetching cat fact:", error.message)

        res.status(500).json({
            status: "error",
            message: "Failed to fetch cat fact. Please try again later.",
            timestamp: new Date().toISOString(),
        })
    }
}