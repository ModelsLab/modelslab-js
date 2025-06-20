// demo.ts - ModelsLab SDK TypeScript Demo
import "dotenv/config";
import {
  Client,
  Community,
  Audio,
  Video,
  ImageEditing,
  DeepFake,
  ThreeD,
  Realtime,
  InteriorAPI,
  Text2Image,
  Text2Speech,
} from "./src/index";

async function runTypeScriptDemo(): Promise<void> {
  console.log("🚀 ModelsLab SDK TypeScript Demo Starting...\n");

  // Initialize client
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("❌ API_KEY not found in environment variables");
    console.log("Please set your API key in the .env file");
    return;
  }

  console.log("✅ API Key loaded successfully");
  console.log(
    `🔑 API Key: ${apiKey.substring(0, 8)}...${apiKey.substring(
      apiKey.length - 8
    )}\n`
  );

  // Initialize API clients with TypeScript types
  const community = new Community(apiKey);
  const audio = new Audio(apiKey);
  const video = new Video(apiKey);
  const imageEditing = new ImageEditing(apiKey);
  const deepfake = new DeepFake(apiKey);
  const threeD = new ThreeD(apiKey);
  const realtime = new Realtime(apiKey);
  const interior = new InteriorAPI(apiKey);

  console.log("🎯 TypeScript SDK Features:");
  console.log("✨ Full type safety with TypeScript interfaces");
  console.log("🔍 IntelliSense support for all API parameters");
  console.log("🛡️ Runtime validation with Zod schemas");
  console.log("📝 Auto-completion for all API methods\n");

  // Example 1: Text to Image with TypeScript types
  console.log("🎨 Example 1: Text to Image with TypeScript");
  try {
    const textToImageRequest: Text2Image = {
      key: apiKey,
      model_id: "flux",
      prompt:
        "A majestic dragon flying over a medieval castle, fantasy art style",
      width: 512,
      height: 512,
      samples: 1,
      num_inference_steps: 25,
      guidance_scale: 7.5,
      safety_checker: "yes",
      enhance_prompt: "yes",
      seed: Math.floor(Math.random() * 1000000),
    };

    console.log("📤 Sending typed text-to-image request...");
    const result = await community.textToImage(textToImageRequest);
    console.log("📥 Response received:", JSON.stringify(result, null, 2));

    if (result.id) {
      console.log("🔄 Fetching result with retry logic...");
      const fetchResult = await community.fetch(result.id);
      console.log("✅ Final result:", JSON.stringify(fetchResult, null, 2));
    }
  } catch (error) {
    console.error(
      "❌ Text to Image Error:",
      error instanceof Error ? error.message : error
    );
  }

  console.log("\n" + "=".repeat(50) + "\n");

  // Example 2: Text to Speech with TypeScript types
  console.log("🗣️ Example 2: Text to Speech with TypeScript");
  try {
    const textToSpeechRequest: Text2Speech = {
      key: apiKey,
      prompt:
        "Welcome to ModelsLab! This TypeScript SDK provides type-safe access to all our AI APIs.",
      voice_id: "madison",
      language: "american english",
    };

    console.log("📤 Sending typed text-to-speech request...");
    const result = await audio.textToSpeech(textToSpeechRequest);
    console.log("📥 Response received:", JSON.stringify(result, null, 2));

    if (result.id) {
      console.log("🔄 Fetching audio result...");
      const fetchResult = await audio.fetch(result.id);
      console.log("✅ Final result:", JSON.stringify(fetchResult, null, 2));
    }
  } catch (error) {
    console.error(
      "❌ Text to Speech Error:",
      error instanceof Error ? error.message : error
    );
  }

  console.log("\n" + "=".repeat(50) + "\n");

  // Example 3: Show TypeScript benefits
  console.log("💡 TypeScript Benefits Demonstration:");
  console.log("1. ✅ Type checking prevents runtime errors");
  console.log("2. 🔍 IDE autocomplete for all parameters");
  console.log("3. 📚 Built-in documentation through types");
  console.log("4. 🛡️ Schema validation with Zod");
  console.log("5. 🔧 Refactoring safety");

  console.log("\n🎉 TypeScript Demo completed!");
  console.log("\n📖 Next Steps:");
  console.log("- Explore all available API methods with full type support");
  console.log("- Use the schema types for request validation");
  console.log(
    "- Check out the generated .d.ts files for complete type definitions"
  );
  console.log(
    "- Visit https://docs.modelslab.com for comprehensive API documentation"
  );
}

// Run the TypeScript demo
runTypeScriptDemo().catch(console.error);
