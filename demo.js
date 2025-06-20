// demo.js - ModelsLab SDK Demo
require('dotenv').config();
const {
  Client,
  Community,
  Audio,
  Video,
  ImageEditing,
  DeepFake,
  ThreeD,
  Realtime,
  InteriorAPI
} = require('./dist/index');

async function runDemo() {
  console.log('🚀 ModelsLab SDK Demo Starting...\n');

  // Initialize client
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error('❌ API_KEY not found in environment variables');
    console.log('Please set your API key in the .env file');
    return;
  }

  // Initialize API clients
  const community = new Community(apiKey);
  const audio = new Audio(apiKey);
  const video = new Video(apiKey);
  const imageEditing = new ImageEditing(apiKey);
  const deepfake = new DeepFake(apiKey);
  const threeD = new ThreeD(apiKey);
  const realtime = new Realtime(apiKey);
  const interior = new InteriorAPI(apiKey);

  console.log('🎯 Available API Endpoints:');
  console.log('📸 Community API - Text to Image, Image to Image, Inpainting, ControlNet');
  console.log('🎵 Audio API - Text to Speech, Voice Cloning, Music Generation');
  console.log('🎬 Video API - Text to Video, Image to Video');
  console.log('✨ Image Editing API - Background Removal, Super Resolution, Fashion');
  console.log('🎭 DeepFake API - Face Swap, Video Swap');
  console.log('🏗️ 3D API - Text to 3D, Image to 3D');
  console.log('⚡ Realtime API - Fast Image Generation');
  console.log('🏠 Interior API - Interior Design, Room Decoration\n');

  // Example 1: Text to Image Generation
  console.log('🎨 Example 1: Text to Image Generation');
  try {
    const textToImageRequest = {
      key: apiKey,
      model_id: "flux",
      prompt: "A beautiful sunset over mountains, digital art style",
      width: 512,
      height: 512,
      samples: 1,
      num_inference_steps: 20,
      guidance_scale: 7.5,
      safety_checker: "yes",
      enhance_prompt: "yes"
    };

    console.log('📤 Sending text-to-image request...');
    const result = await community.textToImage(textToImageRequest);
    console.log('📥 Response received:', JSON.stringify(result, null, 2));

    if (result.id) {
      console.log('🔄 Fetching result...');
      const fetchResult = await community.fetch(result.id);
      console.log('✅ Final result:', JSON.stringify(fetchResult, null, 2));
    }
  } catch (error) {
    console.error('❌ Text to Image Error:', error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Example 2: Text to Speech
  console.log('🗣️ Example 2: Text to Speech');
  try {
    const textToSpeechRequest = {
      key: apiKey,
      prompt: "Hello, this is a test of the ModelsLab text to speech API!",
      voice_id: "madison",
      language: "american english"
    };

    console.log('📤 Sending text-to-speech request...');
    const result = await audio.textToSpeech(textToSpeechRequest);
    console.log('📥 Response received:', JSON.stringify(result, null, 2));

    if (result.id) {
      console.log('🔄 Fetching result...');
      const fetchResult = await audio.fetch(result.id);
      console.log('✅ Final result:', JSON.stringify(fetchResult, null, 2));
    }
  } catch (error) {
    console.error('❌ Text to Speech Error:', error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Example 3: Background Removal
  console.log('🖼️ Example 3: Background Removal');
  try {
    const backgroundRemovalRequest = {
      key: apiKey,
      init_image: "https://example.com/sample-image.jpg" // You would use a real image URL here
    };

    console.log('📤 Sending background removal request...');
    console.log('ℹ️ Note: This would require a valid image URL');
    // Uncomment the next lines to actually make the request
    // const result = await imageEditing.backgroundRemover(backgroundRemovalRequest);
    // console.log('📥 Response received:', JSON.stringify(result, null, 2));

    console.log('⏭️ Skipping actual request (no valid image URL provided)');
  } catch (error) {
    console.error('❌ Background Removal Error:', error.message);
  }

  console.log('\n🎉 Demo completed! Check the ModelsLab documentation for more examples:');
  console.log('📚 https://docs.modelslab.com');
  console.log('\n💡 Tips:');
  console.log('- Replace image URLs with actual images for image-based APIs');
  console.log('- Check API response for task IDs and use fetch() to get results');
  console.log('- Adjust parameters based on your specific use case');
  console.log('- Monitor your API usage and credits at https://modelslab.com/dashboard');
}

// Run the demo
runDemo().catch(console.error);
