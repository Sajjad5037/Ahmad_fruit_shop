export async function generateTopic(payload) {
  const res = await fetch("http://localhost:8000/topic/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Generation failed");
  }

  return res.json();
}
