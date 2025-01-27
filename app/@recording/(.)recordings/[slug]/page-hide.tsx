// import React from "react";
// import { Metadata } from "next";
// import { urlForImage } from "@/sanity/lib/image";
// import { notFound } from "next/navigation";
// import { VisualArtwork, WithContext } from "schema-dts";
// import Script from "next/script";
// import { getRecording, getRecordings } from "@/sanity/query/recording";
// import RecordingModal from "@/app/recordings/[slug]/components/RecordingModal";
// export const revalidate = 60;

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

// export async function generateStaticParams() {
//   const recordings = await getRecordings();
//   return recordings.map((p) => p.slug?.current);
// }

// // Function to generate metadata dynamically
// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata | undefined> {
//   const recording = await getRecording({ slug: params.slug });

//   if (!recording) return;

//   return {
//     title: recording.title,
//     description: recording.description,
//     openGraph: {
//       title: recording.title,
//       description: recording.description,
//       images: [
//         {
//           url: urlForImage(recording.thumbnail as any),
//           width: 1200,
//           height: 630,
//         },
//       ],
//       locale: "en_US",
//       url: `https://jedesigns.com/recordings/${recording.slug?.current}`,
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: recording.title,
//       description: recording.description,
//       images: [urlForImage(recording.thumbnail as any)],
//     },
//   };
// }

// async function RecordingPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   const recording = await getRecording({ slug });

//   if (!recording) return notFound();

//   const structuredData: WithContext<VisualArtwork> = {
//     "@context": "https://schema.org",
//     "@type": "VisualArtwork",
//     name: recording.title,
//     url: `https://www.jedesigns.com/recordings/${recording.slug?.current}`,
//     description:
//       recording.description && recording.description.length > 0
//         ? (recording.description as [any])
//         : "",
//     image: urlForImage(recording.mainImage as any),
//     creator: {
//       "@type": "Person",
//       name: "Jeremy Ellsworth",
//     },
//     artform: "Graphic Design",
//     artMedium: "Digital",
//   };

//   return (
//     <>
//       <Script
//         id="recording"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <RecordingModal recording={recording} />
//     </>
//   );
// }

// export default RecordingPage;
