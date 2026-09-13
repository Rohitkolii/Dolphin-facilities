"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

//============================================================ */

const projectsdata = [
  {
    index: 7,
    id: "1y79v_9_9B8UVuy7c1xqRPucGqR79Y3Ou",
    name: "VH Ujjain — The Spirit of the Celebration.mp4",
    mimeType: "video/mp4",
    size: "97866635",
    url: "/api/media/1y79v_9_9B8UVuy7c1xqRPucGqR79Y3Ou",
    viewUrl:
      "https://drive.google.com/file/d/1y79v_9_9B8UVuy7c1xqRPucGqR79Y3Ou/view",
    description:
      "A captivating reel from VH Ujjain, bringing together the energy, atmosphere, people, and standout moments that shaped this memorable celebration.",
    thumbnail: "/api/media/thumbnail/1y79v_9_9B8UVuy7c1xqRPucGqR79Y3Ou",
    headimg: "/images/ladies.png",
    category: 1,
  },  
  {
    index: 4,
    id: "1MPBP2zXTDZOpupYPDCkc_PqmSlfWFS74",
    name: "vit convocation , iccer van campaign.MP4",
    mimeType: "video/mp4",
    size: "704170370",
    url: "/api/media/1MPBP2zXTDZOpupYPDCkc_PqmSlfWFS74",
    viewUrl:
      "https://drive.google.com/file/d/1MPBP2zXTDZOpupYPDCkc_PqmSlfWFS74/view",
    description: "",
    thumbnail: "/api/media/thumbnail/1MPBP2zXTDZOpupYPDCkc_PqmSlfWFS74",
    headimg: "/images/group.jpg",
    category: 2,
  },

  {
    index: 8,
    id: "1c3-BiJW8M14N2cThW3tp720ympMCyA0-",
    name: "IN THE ESTEEMED PRESENCE OF THE HON’BLE CHIEF MINISTER — VAN MELA UJJAIN 2026.mp4",
    mimeType: "video/mp4",
    size: "613063620",
    url: "/api/media/1c3-BiJW8M14N2cThW3tp720ympMCyA0-",
    viewUrl:
      "https://drive.google.com/file/d/1c3-BiJW8M14N2cThW3tp720ympMCyA0-/view",
    description:
      "Highlights from Van Mela Ujjain 2026, held in the esteemed presence of the Hon’ble Chief Minister, showcasing the event’s key moments, celebrations, and memorable experiences.",
    thumbnail: "/api/media/thumbnail/1c3-BiJW8M14N2cThW3tp720ympMCyA0-",
    headimg: "/images/cm.png",
    category: 3,
  },
  {
    index: 0,
    id: "14TMS8QuMhUQP2dH3dCq5PGHfXmH_l9Ff",
    name: "Sequence 01_1.mp4",
    mimeType: "video/mp4",
    size: "396823869",
    url: "/api/media/14TMS8QuMhUQP2dH3dCq5PGHfXmH_l9Ff",
    viewUrl:
      "https://drive.google.com/file/d/14TMS8QuMhUQP2dH3dCq5PGHfXmH_l9Ff/view",
    description: "",
    thumbnail: "/api/media/thumbnail/14TMS8QuMhUQP2dH3dCq5PGHfXmH_l9Ff",
    headimg: "/images/thumbnail.png",
    category: 2,
  },
  {
    index: 11,
    id: "1n1SIoGWsMibL9_7AXGhVXD5ZbNNKop4q",
    name: "REVIEW REEL FOR INTERNATIONAL VAN MELA FOR MASIVE RESPONSE.mp4",
    mimeType: "video/mp4",
    size: "297697035",
    url: "/api/media/1n1SIoGWsMibL9_7AXGhVXD5ZbNNKop4q",
    viewUrl:
      "https://drive.google.com/file/d/1n1SIoGWsMibL9_7AXGhVXD5ZbNNKop4q/view",
    description:
      "A high-energy review reel capturing the massive response to International Van Mela, showcasing the excitement, public engagement, key attractions, and unforgettable moments that made the event a memorable experience.",
    thumbnail: "/api/media/thumbnail/1n1SIoGWsMibL9_7AXGhVXD5ZbNNKop4q",
    headimg: "/images/ladies2.png",
    category: 4,
  },
  {
    index: 13,
    id: "1D88dVFZAFjCZBS9TodY2_UffV9VUUe3V",
    name: "INTERNATIONAL VAN MELA BHOPAL",
    mimeType: "video/mp4",
    size: "296453062",
    url: "/api/media/1D88dVFZAFjCZBS9TodY2_UffV9VUUe3V",
    viewUrl:
      "https://drive.google.com/file/d/1D88dVFZAFjCZBS9TodY2_UffV9VUUe3V/view",
    description:
      "A celebration of forests, wildlife, and the rich natural heritage of Madhya Pradesh, bringing together people, communities, and experiences at International Van Mela Bhopal 2025.",
    thumbnail: "/api/media/thumbnail/1D88dVFZAFjCZBS9TodY2_UffV9VUUe3V",
    headimg: "/images/image.png",
    category: 4,
  },
  {
    index: 14,
    id: "1Uv2EwjQOflh_r4tVUlPNpCA8Y8iknJNM",
    name: "INTERNATIONAL VAN MELA 2025.mp4",
    mimeType: "video/mp4",
    size: "256005689",
    url: "/api/media/1Uv2EwjQOflh_r4tVUlPNpCA8Y8iknJNM",
    viewUrl:
      "https://drive.google.com/file/d/1Uv2EwjQOflh_r4tVUlPNpCA8Y8iknJNM/view",
    description:
      "Highlights from International Van Mela Bhopal 2025, capturing the vibrant celebrations, cultural experiences, public engagement, and memorable moments from this grand international event.",
    thumbnail: "/api/media/thumbnail/1Uv2EwjQOflh_r4tVUlPNpCA8Y8iknJNM",
    headimg: "/images/ground.webp",
    category: 4,
  },

  {
    index: 2,
    id: "1Ub35dBoTXOvIRm1MNLRopEyARiBlswNL",
    name: "Khandwa Dolphin Facilities.mp4",
    mimeType: "video/mp4",
    size: "275906381",
    url: "/api/media/1Ub35dBoTXOvIRm1MNLRopEyARiBlswNL",
    viewUrl:
      "https://drive.google.com/file/d/1Ub35dBoTXOvIRm1MNLRopEyARiBlswNL/view",
    description: "",
    thumbnail: "/api/media/thumbnail/1Ub35dBoTXOvIRm1MNLRopEyARiBlswNL",
    headimg: "/images/frame.png",
    category: 5,
  },
  {
    index: 3,
    id: "1o57AJB1h7kjnHgQDQVSCEU2ICfJUwnaI",
    name: "Ratlam Dolphin Facilities.mp4",
    mimeType: "video/mp4",
    size: "281889224",
    url: "/api/media/1o57AJB1h7kjnHgQDQVSCEU2ICfJUwnaI",
    viewUrl:
      "https://drive.google.com/file/d/1o57AJB1h7kjnHgQDQVSCEU2ICfJUwnaI/view",
    description: "",
    thumbnail: "/api/media/thumbnail/1o57AJB1h7kjnHgQDQVSCEU2ICfJUwnaI",
    headimg: "/images/EICHER.jpeg",
    category: 6,
  },
  {
    index: 5,
    id: "1OBfds4Cge9u-NQdHvYutoR22bz4Z_-Kw",
    name: "VH Ujjain_Final.mp4",
    mimeType: "video/mp4",
    size: "578398911",
    url: "/api/media/1OBfds4Cge9u-NQdHvYutoR22bz4Z_-Kw",
    viewUrl:
      "https://drive.google.com/file/d/1OBfds4Cge9u-NQdHvYutoR22bz4Z_-Kw/view",
    description: "",
    thumbnail: "/api/media/thumbnail/1OBfds4Cge9u-NQdHvYutoR22bz4Z_-Kw",
  },
  {
    index: 6,
    id: "1r2F-cmp0IZB0I9R9Qgp6XswdlU8oLfDR",
    name: "VH Ujjain Reel 2.mp4",
    mimeType: "video/mp4",
    size: "295677355",
    url: "/api/media/1r2F-cmp0IZB0I9R9Qgp6XswdlU8oLfDR",
    viewUrl:
      "https://drive.google.com/file/d/1r2F-cmp0IZB0I9R9Qgp6XswdlU8oLfDR/view",
    description: "",
    thumbnail: "/api/media/thumbnail/1r2F-cmp0IZB0I9R9Qgp6XswdlU8oLfDR",
  },
  {
    index: 1,
    id: "1-3zav_20oj_nPEceUADgRZV0Wlu-I718",
    name: "Eicher (7 Sept).mp4",
    mimeType: "video/mp4",
    size: "192257026",
    url: "/api/media/1-3zav_20oj_nPEceUADgRZV0Wlu-I718",
    viewUrl:
      "https://drive.google.com/file/d/1-3zav_20oj_nPEceUADgRZV0Wlu-I718/view",
    description: "",
    thumbnail: "/api/media/thumbnail/1-3zav_20oj_nPEceUADgRZV0Wlu-I718",
  },
  {
    index: 9,
    id: "1VdBbgn-XTNFVvdhuZUqZ4a0ItU08narl",
    name: "A CINEMATIC GLIMPSE — VAN MELA UJJAIN 2026.mp4",
    mimeType: "video/mp4",
    size: "563250818",
    url: "/api/media/1VdBbgn-XTNFVvdhuZUqZ4a0ItU08narl",
    viewUrl:
      "https://drive.google.com/file/d/1VdBbgn-XTNFVvdhuZUqZ4a0ItU08narl/view",
    description:
      "A cinematic glimpse of Van Mela Ujjain 2026, capturing the vibrant atmosphere, memorable moments, cultural spirit, and grand celebrations of this special event.\n",
    thumbnail: "/api/media/thumbnail/1VdBbgn-XTNFVvdhuZUqZ4a0ItU08narl",
  },
  {
    index: 10,
    id: "1rg5soiPsHo_6Oau2A3PMOs4EqtI1-f4c",
    name: "INTERNATIONAL VAN MELA SHORT REVIEW REEL.mp4",
    mimeType: "video/mp4",
    size: "563302287",
    url: "/api/media/1rg5soiPsHo_6Oau2A3PMOs4EqtI1-f4c",
    viewUrl:
      "https://drive.google.com/file/d/1rg5soiPsHo_6Oau2A3PMOs4EqtI1-f4c/view",
    description:
      "A vibrant audience-driven reel offering a fresh perspective on International Van Mela, highlighting the atmosphere, public reactions, and the experiences that made the celebration stand out.",
    thumbnail: "/api/media/thumbnail/1rg5soiPsHo_6Oau2A3PMOs4EqtI1-f4c",
  },
  {
    index: 12,
    id: "1FEIj8Eqtp1_MQpcaeRxrzsV8OXvmx7WK",
    name: "INTERNATIONAL VAN MELA REVIEW",
    mimeType: "video/mp4",
    size: "310068676",
    url: "/api/media/1FEIj8Eqtp1_MQpcaeRxrzsV8OXvmx7WK",
    viewUrl:
      "https://drive.google.com/file/d/1FEIj8Eqtp1_MQpcaeRxrzsV8OXvmx7WK/view",
    description:
      "A closer look at International Van Mela, featuring event highlights, visitor experiences, key attractions, and memorable moments that showcase the spirit and impact of this unique celebration.",
    thumbnail: "/api/media/thumbnail/1FEIj8Eqtp1_MQpcaeRxrzsV8OXvmx7WK",
  },
  {
    index: 15,
    id: "1VKCzut8Za9lI2NZLGeFlVIgO0t0m_D9D",
    name: "iccer launch and van mela and goverment event.MP4",
    mimeType: "video/mp4",
    size: "812146595",
    url: "/api/media/1VKCzut8Za9lI2NZLGeFlVIgO0t0m_D9D",
    viewUrl:
      "https://drive.google.com/file/d/1VKCzut8Za9lI2NZLGeFlVIgO0t0m_D9D/view",
    description:
      "A dynamic collection of highlights from the ICCER launch, Van Mela, and various government events, capturing key moments, celebrations, public engagement, and memorable experiences from these impactful occasions.\n",
    thumbnail: "/api/media/thumbnail/1VKCzut8Za9lI2NZLGeFlVIgO0t0m_D9D",
  },
  {
    index: 16,
    id: "11GCLuriWxLv5WpVf0qq4It5UisoaB-OS",
    name: "all evets highlights, Celebrating Every Moment.mp4",
    mimeType: "video/mp4",
    size: "2963824096",
    url: "/api/media/11GCLuriWxLv5WpVf0qq4It5UisoaB-OS",
    viewUrl:
      "https://drive.google.com/file/d/11GCLuriWxLv5WpVf0qq4It5UisoaB-OS/view",
    description:
      "A vibrant collection of event highlights capturing memorable moments, celebrations, and unforgettable experiences. From joyful gatherings to grand occasions, every frame brings together the energy, emotions, and special moments that make each event truly memorable.",
    thumbnail: "/api/media/thumbnail/11GCLuriWxLv5WpVf0qq4It5UisoaB-OS",
  },
];

const IMAGE_OVERRIDES = {
  eicher: [
    "/portfolio-images/eicher-1.jpg",

    "/portfolio-images/eicher-2.jpg",

    "/portfolio-images/eicher-3.jpg",

    "/portfolio-images/eicher-4.jpg",

    "/portfolio-images/eicher-5.jpg",

    "/portfolio-images/eicher-6.jpg",

    "/portfolio-images/eicher-7.jpg",

    "/portfolio-images/eicher-8.jpg",

    "/portfolio-images/eicher-9.jpg",

    "/portfolio-images/eicher-10.jpg",

    "/portfolio-images/eicher-11.jpg",

    "/portfolio-images/eicher-gaurav-utsav.png",
  ],

  "bhopal-herbal-fair": [
    "/portfolio-images/bhopal-herbal-fair-1.jpg",

    "/portfolio-images/bhopal-herbal-fair-2.jpg",

    "/portfolio-images/bhopal-herbal-fair-3.jpg",
  ],

  "ujjain-herbal-fair": [
    "/portfolio-images/ujjain-herbal-fair-1.jpg",

    "/portfolio-images/ujjain-herbal-fair-2.jpg",

    "/portfolio-images/ujjain-herbal-fair-3.jpg",
  ],
};

/* ============================================================

   KEY NORMALIZE — spaces / underscores / multiple dashes sabko

   ek jaisa "single-dash" format mein convert karta hai, taaki

   Drive filename se bani key aur tumhari override key (chahe

   thoda alag format mein likhi ho) match ho jaaye.

   Jaise: "Bhopal Herbal Fair" aur "bhopal-herbal-fair" dono

   normalize hoke "bhopal-herbal-fair" ban jaayenge.

============================================================ */

function normalizeKey(key) {
  return key

    .toLowerCase()

    .trim()

    .replace(/[\s_]+/g, "-")

    .replace(/-+/g, "-");
}

function findImageOverrides(key) {
  const normalizedKey = normalizeKey(key);

  const match = Object.keys(IMAGE_OVERRIDES).find(
    (k) => normalizeKey(k) === normalizedKey,
  );

  return match ? IMAGE_OVERRIDES[match] : [];
}

function getGroupKey(fileName) {
  const withoutExt = fileName.replace(/\.[^/.]+$/, "");

  const key = withoutExt.replace(/[-_\s]*\d+$/, "").trim();

  return key || withoutExt;
}

// function getSortIndex(fileName) {
//   const withoutExt = fileName.replace(/\.[^/.]+$/, "");

//   const match = withoutExt.match(/(\d+)$/);

//   return match ? parseInt(match[1], 10) : 0;
// }

function getSortIndex(fileName) {
  const withoutExt = fileName.replace(/\.[^/.]+$/, "");

  // Last number: project-1, project-2, project-3
  const match = withoutExt.match(/(\d+)\s*$/);

  return match ? parseInt(match[1], 10) : 999999;
}

function humanize(slug) {
  return slug

    .replace(/[-_]/g, " ")

    .replace(/\s+/g, " ")

    .trim()

    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function groupFilesIntoProjects(files) {
  const groups = new Map();

  files.forEach((file) => {
    const key = getGroupKey(file.name);

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(file);

    // console.log(
    //   "Drive file:",
    //   file.name,
    //   "→ generated key:",
    //   key
    // );
  });

  return Array.from(groups.entries()).map(([key, groupFiles]) => {
    const sorted = [...groupFiles].sort(
      (a, b) => getSortIndex(a.name) - getSortIndex(b.name),
    );

    // =====================================================
    // DRIVE VIDEOS
    // =====================================================

    const driveVideos = sorted
      .filter((file) => file.mimeType?.startsWith("video/"))
      .map((file) => ({
        type: "video",
        url: file.url,
        name: file.name,
        thumb: file.headimg,
        category: file.category || "",
      }));

    // =====================================================
    // LOCAL IMAGES
    // =====================================================

    const manualImages = findImageOverrides(key).map((url) => ({
      type: "image",
      url,
      name: humanize(key),
    }));

    // =====================================================
    // POSTER
    //
    // Google Drive thumbnail ko use NAHI kar rahe because
    // lh3.googleusercontent.com/drive-storage URL fail ho raha hai.
    //
    // Priority:
    // 1. Local IMAGE_OVERRIDE
    // 2. null
    //
    // Agar local image nahi hai to video khud card ke
    // background/poster ke roop mein handle hoga.
    // =====================================================

    const firstVideoFile = sorted.find((file) =>
      file.mimeType?.startsWith("video/"),
    );

    const driveThumbnail = firstVideoFile?.thumbnail || null;

    const localPoster = manualImages[0]?.url || driveThumbnail;

    // const localPoster = manualImages[0]?.url || null;

    // =====================================================
    // DESCRIPTION
    // =====================================================

    const descriptionSource = sorted.find(
      (file) => file.description && file.description.trim().length > 0,
    );

    // =====================================================
    // COMBINED MEDIA
    // =====================================================

    const combinedMedia = [...driveVideos, ...manualImages];
    console.log(driveVideos);
    return {
      title: humanize(key),

      category: driveVideos[0]?.category || "",

      date: "",

      description: descriptionSource?.description || "",

      poster: driveVideos[0]?.thumb || localPoster,

      video: driveVideos[0]?.url || null,

      media: combinedMedia,

      videoCount: driveVideos.length,
    };
  });
}

export default function PortfolioGrid() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(groupFilesIntoProjects(projectsdata || []));
  }, []);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  /* SHOW MORE — 3 → 6 → 9 (step by step) */

  const [visibleCount, setVisibleCount] = useState(3);

  /* POPUP */

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  /* CURRENT MEDIA INDEX */

  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("/api/media");

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Failed to fetch portfolio media");
        }

        const transformedProjects = projectsdata
          .map((project) => {
            const file = data.files?.find((file) => file.id == project.id);

            if (!file) return null;

            return {
              ...project,
              ...file,
            };
          })
          .filter(Boolean);

        setProjects(
          groupFilesIntoProjects(transformedProjects || []).slice(0, 9),
        );
      } catch (err) {
        console.error("Unable to load portfolio media:", err);

        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  const firstRow = projects.slice(0, Math.min(3, visibleCount));

  const secondRow = projects.slice(3, Math.min(6, visibleCount));

  const thirdRow = projects.slice(6, Math.min(9, visibleCount));

  const fourthRow = projects.slice(9, Math.min(12, visibleCount));

  const fifthRow = projects.slice(12, Math.min(15, visibleCount));

  const sixthRow = projects.slice(15, Math.min(18, visibleCount));

  const hasMore = visibleCount < projects.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  // const handleProjectClick = (project) => {
  //   setSelectedProject(project);

  //   setSelectedMediaIndex(0);
  // };

  const handleProjectClick = (project) => {
    const sameCategoryProjects = projects.filter(
      (item) => item.category === project.category,
    );

    const index = sameCategoryProjects.findIndex(
      (item) => item.title === project.title,
    );

    setSelectedProject(project);
    setSelectedProjectIndex(index >= 0 ? index : 0);
    setSelectedMediaIndex(0);
  };

  const getMediaList = (project) => {
    const media = project?.media?.filter((item) => item?.url) || [];

    return media.length > 0
      ? media
      : project?.video
        ? [{ type: "video", url: project.video }]
        : [];
  };

  // const handleNextMedia = () => {
  //   const media = getMediaList(selectedProject);

  //   if (!media.length) return;

  //   setSelectedMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  // };

  // const handlePreviousMedia = () => {
  //   const media = getMediaList(selectedProject);

  //   if (!media.length) return;

  //   setSelectedMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  // };

  // const handleNextMedia = () => {
  //   const videos =
  //     selectedProject?.media?.filter(
  //       (item) => item?.url && item?.type === "video",
  //     ) || [];

  //   // 1 ya 0 video hai to kuch mat karo
  //   if (videos.length <= 1) return;

  //   setSelectedMediaIndex((prev) =>
  //     prev === videos.length - 1 ? 0 : prev + 1,
  //   );
  // };

  // const handlePreviousMedia = () => {
  //   const videos =
  //     selectedProject?.media?.filter(
  //       (item) => item?.url && item?.type === "video",
  //     ) || [];

  //   // 1 ya 0 video hai to kuch mat karo
  //   if (videos.length <= 1) return;

  //   setSelectedMediaIndex((prev) =>
  //     prev === 0 ? videos.length - 1 : prev - 1,
  //   );
  // };

  const handleNextMedia = () => {
    if (!selectedProject) return;

    const sameCategoryProjects = projects.filter(
      (item) => item.category === selectedProject.category,
    );

    if (sameCategoryProjects.length <= 1) return;

    const currentIndex = sameCategoryProjects.findIndex(
      (item) => item.title === selectedProject.title,
    );

    const nextIndex =
      currentIndex === sameCategoryProjects.length - 1 ? 0 : currentIndex + 1;

    setSelectedProject(sameCategoryProjects[nextIndex]);
    setSelectedMediaIndex(0);
  };

  const handlePreviousMedia = () => {
    if (!selectedProject) return;

    const sameCategoryProjects = projects.filter(
      (item) => item.category === selectedProject.category,
    );

    if (sameCategoryProjects.length <= 1) return;

    const currentIndex = sameCategoryProjects.findIndex(
      (item) => item.title === selectedProject.title,
    );

    const previousIndex =
      currentIndex === 0 ? sameCategoryProjects.length - 1 : currentIndex - 1;

    setSelectedProject(sameCategoryProjects[previousIndex]);
    setSelectedMediaIndex(0);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    setSelectedProjectIndex(0);
    setSelectedMediaIndex(0);
  };

  if (loading && projectsdata.length === 0) {
    return (
      <section className="w-full bg-[#303030] py-16 text-center text-white/70">
        Loading portfolio…
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-[#303030] py-16 text-center text-red-400">
        Couldn't load portfolio: {error}
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="w-full bg-[#303030] py-16 text-center text-white/70">
        No portfolio items found yet.
      </section>
    );
  }

  return (
    <>
      <section
        className="

          w-full

          bg-[#303030]


          py-10

          md:py-12


          px-4

          sm:px-6

          md:px-8

          lg:px-[7%]


          overflow-hidden

        "
      >
        <div className="w-full mx-auto">
          <PortfolioRow
            projects={firstRow}
            rowIndex={0}
            onProjectClick={handleProjectClick}
          />

          {secondRow.length > 0 && (
            <div
              className="

                mt-[4px]

                sm:mt-[10px]

                md:mt-[18px]

                lg:mt-[30px]

              "
            >
              <PortfolioRow
                projects={secondRow}
                rowIndex={1}
                onProjectClick={handleProjectClick}
              />
            </div>
          )}

          {thirdRow.length > 0 && (
            <div
              className="

                mt-[4px]

                sm:mt-[10px]

                md:mt-[18px]

                lg:mt-[30px]

              "
            >
              <PortfolioRow
                projects={thirdRow}
                rowIndex={2}
                onProjectClick={handleProjectClick}
              />
            </div>
          )}

          {fourthRow.length > 0 && (
            <div
              className="

                mt-[4px]

                sm:mt-[10px]

                md:mt-[18px]

                lg:mt-[30px]

              "
            >
              <PortfolioRow
                projects={fourthRow}
                rowIndex={3}
                onProjectClick={handleProjectClick}
              />
            </div>
          )}

          {fifthRow.length > 0 && (
            <div
              className="

                mt-[4px]

                sm:mt-[10px]

                md:mt-[18px]

                lg:mt-[30px]

              "
            >
              <PortfolioRow
                projects={fifthRow}
                rowIndex={4}
                onProjectClick={handleProjectClick}
              />
            </div>
          )}

          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="

                flex

                justify-center


                mt-5

                md:mt-6

                lg:mt-7

              "
            >
              <motion.button
                type="button"
                onClick={handleShowMore}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="

                  px-5

                  py-2.5


                  min-w-[90px]


                  bg-gradient-to-r

                  from-[#79cba8]

                  to-[#329bd0]


                  border

                  border-[#73c9b9]


                  text-white

                  text-[15px]

                  font-bold


                  cursor-pointer


                  transition-all

                  duration-300


                  hover:brightness-110

                "
              >
                Show More
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <MediaPopup
            project={selectedProject}
            mediaIndex={selectedMediaIndex}
            onClose={handleClosePopup}
            onNext={handleNextMedia}
            onPrevious={handlePreviousMedia}
            canNavigate={
              projects.filter(
                (item) => item.category === selectedProject.category,
              ).length > 1
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================

   PORTFOLIO ROW

============================================================ */

function PortfolioRow({ projects, rowIndex, onProjectClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,

        delay: rowIndex * 0.1,

        ease: [0.22, 1, 0.36, 1],
      }}
      className="

        flex

        w-full


        h-[180px]

        sm:h-[220px]

        md:h-[300px]

        lg:h-[400px]


        gap-[4px]

        sm:gap-[8px]

        md:gap-[16px]

        lg:gap-[30px]

      "
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {projects.map((project, index) => (
        <PortfolioCard
          key={project.title}
          project={project}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </motion.div>
  );
}

/* ============================================================

   PORTFOLIO CARD

============================================================ */

// function PortfolioCard({ project, isHovered, onMouseEnter, onClick }) {
//   const cardRef = useRef(null);

//   const videoRef = useRef(null);

//   const [isInView, setIsInView] = useState(false);

//   const [canPlay, setCanPlay] = useState(false);

//   useEffect(() => {
//     const node = cardRef.current;

//     if (!node) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },

//       { rootMargin: "200px", threshold: 0.1 },
//     );

//     observer.observe(node);

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const vid = videoRef.current;

//     if (!vid) return;

//     if (isHovered) {
//       const playPromise = vid.play();

//       if (playPromise !== undefined) {
//         playPromise.catch(() => {});
//       }
//     } else {
//       vid.pause();
//     }
//   }, [isHovered, canPlay, isInView]);

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseEnter={onMouseEnter}
//       onClick={onClick}
//       animate={{ flexGrow: isHovered ? 3.3 : 1 }}
//       transition={{
//         flexGrow: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//       }}
//       initial={{ opacity: 0, y: 50, scale: 0.97 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.15 }}
//       className="

//         group

//         relative

//         min-w-0

//         overflow-hidden

//         border

//         border-[#2999c7]

//         bg-[#222]

//         cursor-pointer

//         select-none

//       "
//       style={{ flexBasis: 0 }}
//     >
//       {/* POSTER — hamesha dikhta hai (agar mile), halka, laggy nahi */}
//       {project.poster && (
//         <img
//           src={project.poster}
//           alt={project.title}
//           loading="lazy"
//           className="

//             absolute

//             inset-0

//             w-full

//             h-full

//             object-cover

//             pointer-events-none

//           "
//         />
//       )}

//       {/* VIDEO — sirf tab DOM mein aati hai jab card viewport ke paas ho */}

//       {isInView && project.video && (
//         <video
//           ref={videoRef}
//           src={project.video}
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           onCanPlay={() => setCanPlay(true)}
//           className={`

//             absolute

//             inset-0

//             w-full

//             h-full

//             object-cover

//             pointer-events-none

//             transition-opacity

//             duration-500

//             ease-[cubic-bezier(0.22,1,0.36,1)]

//             ${isHovered && canPlay ? "opacity-100" : "opacity-0"}

//             group-hover:scale-[1.035]

//             transition-transform

//           `}
//         />
//       )}

//       {/* DARK OVERLAY */}

//       <div
//         className="

//           absolute

//           inset-0

//           bg-black/0

//           group-hover:bg-black/15

//           transition-all

//           duration-500

//           pointer-events-none

//         "
//       />

//       {/* BOTTOM GRADIENT — ALWAYS VISIBLE */}

//       <div
//         className="

//           absolute

//           left-0

//           right-0

//           bottom-0

//           h-[110px]

//           bg-gradient-to-t

//           from-black/90

//           via-black/50

//           to-transparent

//           pointer-events-none

//         "
//       />

//       {/* TITLE CONTENT — ALWAYS VISIBLE */}

//       <div
//         className="

//           absolute

//           left-0

//           bottom-0

//           z-10

//           w-full

//           px-3

//           py-3

//           sm:px-4

//           sm:py-4

//           pointer-events-none

//           transition-all

//           duration-500

//           group-hover:translate-y-[-2px]

//         "
//       >
//         {project.category && (
//           <p
//             className="

//               text-[#4db4d5]

//               text-[8px]

//               sm:text-[9px]

//               md:text-[10px]

//               lg:text-[11px]

//               uppercase

//               tracking-wide

//               font-bold

//               mb-1

//             "
//           >
//             {project.category}
//           </p>
//         )}

//         <h3
//           className="

//             text-white

//             text-[11px]

//             sm:text-[13px]

//             md:text-[17px]

//             lg:text-[20px]

//             font-bold

//             leading-tight

//           "
//         >
//           {project.title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// }

// function PortfolioCard({ project, isHovered, onMouseEnter, onClick }) {
//   const cardRef = useRef(null);

//   const videoRef = useRef(null);

//   const [isInView, setIsInView] = useState(false);

//   const [canPlay, setCanPlay] = useState(false);

//   useEffect(() => {
//     const node = cardRef.current;

//     if (!node) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },

//       { rootMargin: "200px", threshold: 0.1 },
//     );

//     observer.observe(node);

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const vid = videoRef.current;

//     if (!vid) return;

//     if (isHovered) {
//       const playPromise = vid.play();

//       if (playPromise !== undefined) {
//         playPromise.catch(() => {});
//       }
//     } else {
//       vid.pause();
//     }
//   }, [isHovered, canPlay, isInView]);

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseEnter={onMouseEnter}
//       onClick={onClick}
//       animate={{ flexGrow: isHovered ? 3.3 : 1 }}
//       transition={{
//         flexGrow: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//       }}
//       initial={{ opacity: 0, y: 50, scale: 0.97 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.15 }}
//       className="

//         group

//         relative

//         min-w-0

//         overflow-hidden

//         border

//         border-[#2999c7]

//         bg-[#222]

//         cursor-pointer

//         select-none

//       "
//       style={{ flexBasis: 0 }}
//     >
//       {/* POSTER — hamesha dikhta hai (agar mile), halka, laggy nahi */}
//       {project.poster && (
//         <img
//           src={project.poster}
//           alt={project.title}
//           loading="lazy"
//           className="

//             absolute

//             inset-0

//             w-full

//             h-full

//             object-cover

//             pointer-events-none

//           "
//         />
//       )}

//       {/* VIDEO — sirf tab DOM mein aati hai jab card viewport ke paas ho */}

//       {isInView && project.video && (
//         <video
//           ref={videoRef}
//           src={project.video}
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           onCanPlay={() => setCanPlay(true)}
//           className={`

//             absolute

//             inset-0

//             w-full

//             h-full

//             object-cover

//             pointer-events-none

//             transition-opacity

//             duration-500

//             ease-[cubic-bezier(0.22,1,0.36,1)]

//             ${canPlay ? "opacity-100" : "opacity-0"}

//             group-hover:scale-[1.035]

//             transition-transform

//           `}
//         />
//       )}

//       {/* DARK OVERLAY */}

//       <div
//         className="

//           absolute

//           inset-0

//           bg-black/0

//           group-hover:bg-black/15

//           transition-all

//           duration-500

//           pointer-events-none

//         "
//       />

//       {/* BOTTOM GRADIENT — ALWAYS VISIBLE */}

//       <div
//         className="

//           absolute

//           left-0

//           right-0

//           bottom-0

//           h-[110px]

//           bg-gradient-to-t

//           from-black/90

//           via-black/50

//           to-transparent

//           pointer-events-none

//         "
//       />

//       {/* TITLE CONTENT — ALWAYS VISIBLE */}

//       <div
//         className="

//           absolute

//           left-0

//           bottom-0

//           z-10

//           w-full

//           px-3

//           py-3

//           sm:px-4

//           sm:py-4

//           pointer-events-none

//           transition-all

//           duration-500

//           group-hover:translate-y-[-2px]

//         "
//       >
//         {project.category && (
//           <p
//             className="

//               text-[#4db4d5]

//               text-[8px]

//               sm:text-[9px]

//               md:text-[10px]

//               lg:text-[11px]

//               uppercase

//               tracking-wide

//               font-bold

//               mb-1

//             "
//           >
//             {project.category}
//           </p>
//         )}

//         <h3
//           className="

//             text-white

//             text-[11px]

//             sm:text-[13px]

//             md:text-[17px]

//             lg:text-[20px]

//             font-bold

//             leading-tight

//           "
//         >
//           {project.title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// }

function PortfolioCard({ project, isHovered, onMouseEnter, onClick }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const [isInView, setIsInView] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const node = cardRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isHovered) {
      video.currentTime = 0;

      const promise = video.play();

      if (promise !== undefined) {
        promise.catch(() => {});
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      animate={{
        flexGrow: isHovered ? 3.3 : 1,
      }}
      transition={{
        flexGrow: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        group
        relative
        min-w-0
        overflow-hidden
        border
        border-[#2999c7]
        bg-[#222]
        cursor-pointer
        select-none
      "
      style={{
        flexBasis: 0,
      }}
    >
      {/* POSTER IMAGE */}
      {console.log(project)}
      {project.poster && (
        <img
          src={project.poster}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className={`
            absolute
            inset-0
            z-0
            w-full
            h-full
            object-cover
            pointer-events-none
            transition-opacity
            duration-500
            ${isHovered && canPlay ? "opacity-0" : "opacity-100"}
          `}
          onError={(e) => {
            console.error("Poster failed:", project.poster);
            e.currentTarget.style.display = "none";
          }}
        />
      )}

      {/* VIDEO */}
      {isInView && project.video && (
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setCanPlay(true)}
          className={`
            absolute
            inset-0
            z-[1]
            w-full
            h-full
            object-cover
            pointer-events-none
            transition-opacity
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isHovered && canPlay ? "opacity-100" : "opacity-0"}
            group-hover:scale-[1.035]
          `}
        />
      )}

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          z-[2]
          bg-black/0
          group-hover:bg-black/15
          transition-all
          duration-500
          pointer-events-none
        "
      />

      {/* GRADIENT */}
      <div
        className="
          absolute
          left-0
          right-0
          bottom-0
          z-[3]
          h-[110px]
          bg-gradient-to-t
          from-black/90
          via-black/50
          to-transparent
          pointer-events-none
        "
      />

      {/* TITLE */}
      <div
        className="
          absolute
          left-0
          bottom-0
          z-[4]
          w-full
          px-3
          py-3
          sm:px-4
          sm:py-4
          pointer-events-none
          transition-all
          duration-500
          group-hover:translate-y-[-2px]
        "
      >
        {/* {project.category && (
          <p
            className="
              text-[#4db4d5]
              text-[8px]
              sm:text-[9px]
              md:text-[10px]
              lg:text-[11px]
              uppercase
              tracking-wide
              font-bold
              mb-1
            "
          >
            {project.category}
          </p>
        )} */}

        <h3
          className={`
            text-white
            text-[11px]
            sm:text-[13px]
            md:text-[17px]
            lg:text-[20px]
            font-bold
            leading-tight
            ${isHovered ? 'visible' : 'invisible'}
          `}
        >
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

/* ============================================================

   MEDIA POPUP

============================================================ */

// function MediaPopup({ project, mediaIndex, onClose, onNext, onPrevious }) {
//   const mediaList = project.media?.filter((item) => item?.url) || [];

//   if (mediaList.length === 0) return null;

//   const currentMedia = mediaList[mediaIndex] || mediaList[0];

//   const mediaSrc = currentMedia.url;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.25 }}
//       onClick={onClose}
//       className="

//         fixed

//         inset-0

//         z-[9999]

//         flex

//         items-center

//         justify-center

//         bg-black/80

//         backdrop-blur-[3px]

//         p-3

//         sm:p-5

//         md:p-8

//       "
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.94, y: 30 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.96, y: 20 }}
//         transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//         onClick={(e) => e.stopPropagation()}
//         className="

//           relative

//           w-full

//           max-w-[1250px]

//           max-h-[90vh]

//           overflow-y-auto

//           bg-[#353535]

//           p-4

//           sm:p-6

//           md:p-8

//         "
//       >
//         <button
//           type="button"
//           onClick={onClose}
//           className="

//             absolute

//             top-3

//             right-3

//             z-50

//             w-9

//             h-9

//             rounded-full

//             bg-[#243746]

//             border

//             border-[#4d9ac2]

//             text-[#75bfe5]

//             text-[25px]

//             flex

//             items-center

//             justify-center

//             cursor-pointer

//             transition-all

//             duration-300

//             hover:bg-[#2999c7]

//             hover:text-white

//             hover:scale-105

//           "
//           aria-label="Close popup"
//         >
//           ×
//         </button>

//         <div
//           className="

//             grid

//             grid-cols-1

//             md:grid-cols-2

//             gap-6

//             md:gap-8

//             items-center

//           "
//         >
//           {/* LEFT SIDE — VIDEO OR IMAGE */}

//           <div
//             className="

//               relative

//               overflow-hidden

//               border-[3px]

//               border-[#2999c7]

//               bg-black

//               w-full

//             "
//           >
//             <AnimatePresence mode="wait">
//               {currentMedia.type === "image" ? (
//                 <motion.img
//                   key={`${project.title}-${mediaIndex}`}
//                   src={mediaSrc}
//                   initial={{ opacity: 0, scale: 1.03 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.98 }}
//                   transition={{ duration: 0.35 }}
//                   className="

//                     block

//                     w-full

//                     h-[250px]

//                     sm:h-[350px]

//                     md:h-[400px]

//                     object-contain

//                     bg-black

//                   "
//                   alt={project.title}
//                 />
//               ) : (
//                 <motion.video
//                   key={`${project.title}-${mediaIndex}`}
//                   src={mediaSrc}
//                   autoPlay
//                   muted={false}
//                   controls
//                   playsInline
//                   preload="auto"
//                   initial={{ opacity: 0, scale: 1.03 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.98 }}
//                   transition={{ duration: 0.35 }}
//                   className="

//                     block

//                     w-full

//                     h-[250px]

//                     sm:h-[350px]

//                     md:h-[400px]

//                     object-contain

//                     bg-black

//                   "
//                 />
//               )}
//             </AnimatePresence>

//             {/* Prev/Next arrows — hamesha visible */}

//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();

//                 onPrevious();
//               }}
//               className="

//                 absolute

//                 left-3

//                 sm:left-4

//                 top-1/2

//                 -translate-y-1/2

//                 z-30

//                 w-10

//                 h-10

//                 rounded-full

//                 bg-black/60

//                 border

//                 border-white/20

//                 text-white

//                 text-[34px]

//                 leading-none

//                 flex

//                 items-center

//                 justify-center

//                 cursor-pointer

//                 transition-all

//                 duration-300

//                 hover:bg-[#2999c7]

//                 hover:border-[#2999c7]

//                 hover:scale-110

//               "
//               aria-label="Previous media"
//             >
//               ‹
//             </button>

//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();

//                 onNext();
//               }}
//               className="

//                 absolute

//                 right-3

//                 sm:right-4

//                 top-1/2

//                 -translate-y-1/2

//                 z-30

//                 w-10

//                 h-10

//                 rounded-full

//                 bg-black/60

//                 border

//                 border-white/20

//                 text-white

//                 text-[34px]

//                 leading-none

//                 flex

//                 items-center

//                 justify-center

//                 cursor-pointer

//                 transition-all

//                 duration-300

//                 hover:bg-[#2999c7]

//                 hover:border-[#2999c7]

//                 hover:scale-110

//               "
//               aria-label="Next media"
//             >
//               ›
//             </button>

//             {mediaList.length > 1 && (
//               <div
//                 className="

//                   absolute

//                   bottom-3

//                   left-1/2

//                   -translate-x-1/2

//                   z-30

//                   flex

//                   gap-1.5

//                 "
//               >
//                 {mediaList.map((m, i) => (
//                   <span
//                     key={i}
//                     className={`

//                       w-1.5

//                       h-1.5

//                       rounded-full

//                       transition-all

//                       duration-300

//                       ${i === mediaIndex ? "bg-[#2999c7] w-4" : "bg-white/40"}

//                     `}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* RIGHT SIDE — PROJECT INFO */}

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${project.title}-${mediaIndex}-info`}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -10 }}
//               transition={{ duration: 0.35 }}
//               className="

//                 text-white

//                 md:pr-4

//               "
//             >
//               <h2
//                 className="

//                   text-[20px]

//                   sm:text-[24px]

//                   md:text-[28px]

//                   font-bold

//                   leading-tight

//                 "
//               >
//                 {project.title}
//               </h2>

//               {project.date && (
//                 <p
//                   className="

//                     mt-2

//                     text-white/80

//                     text-[13px]

//                     md:text-[15px]

//                   "
//                 >
//                   {project.date}
//                 </p>
//               )}

//               {project.category && (
//                 <p
//                   className="

//                     mt-4

//                     text-[#4db4d5]

//                     text-[12px]

//                     md:text-[14px]

//                     font-semibold

//                   "
//                 >
//                   {project.category}
//                 </p>
//               )}

//               <div
//                 className="

//                   mt-5

//                   text-white/90

//                   text-[14px]

//                   md:text-[16px]

//                   leading-[1.7]

//                   whitespace-pre-line

//                 "
//               >
//                 {project.description ||
//                   "Description coming soon — Drive file ke 'Details' panel mein description likh do, ye yahan apne aap aa jaayegi."}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

function MediaPopup({
  project,
  mediaIndex,
  onClose,
  onNext,
  onPrevious,
  canNavigate,
}) {
  // Sirf videos ko navigation ke liye use karo.
  const videoList =
    project?.media?.filter((item) => item?.url && item?.type === "video") || [];

  // Agar videos nahi hain, to local images use hongi.
  const imageList =
    project?.media?.filter((item) => item?.url && item?.type === "image") || [];

  // Video available hai to video list priority hogi.
  // Warna images show hongi.
  const mediaList = videoList.length > 0 ? videoList : imageList;

  if (mediaList.length === 0) return null;

  const currentMedia = mediaList[mediaIndex] || mediaList[0];

  const mediaSrc = currentMedia.url;

  // Arrow TABHI show honge jab 1 se zyada VIDEO ho.
  // const showVideoArrows = videoList.length > 1;
  const showVideoArrows = canNavigate;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-[3px]
        p-3
        sm:p-5
        md:p-8
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-[1250px]
          max-h-[90vh]
          overflow-y-auto
          bg-[#353535]
          p-4
          sm:p-6
          md:p-8
        "
      >
        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            z-50
            w-9
            h-9
            rounded-full
            bg-[#243746]
            border
            border-[#4d9ac2]
            text-[#75bfe5]
            text-[25px]
            flex
            items-center
            justify-center
            cursor-pointer
            transition-all
            duration-300
            hover:bg-[#2999c7]
            hover:text-white
            hover:scale-105
          "
          aria-label="Close popup"
        >
          ×
        </button>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            md:gap-8
            items-center
          "
        >
          {/* LEFT SIDE — VIDEO / IMAGE */}
          <div
            className="
              relative
              overflow-hidden
              border-[3px]
              border-[#2999c7]
              bg-black
              w-full
            "
          >
            <AnimatePresence mode="wait">
              {currentMedia.type === "image" ? (
                <motion.img
                  key={`${project.title}-${mediaIndex}`}
                  src={mediaSrc}
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    block
                    w-full
                    h-[250px]
                    sm:h-[350px]
                    md:h-[400px]
                    object-contain
                    bg-black
                  "
                  alt={project.title}
                />
              ) : (
                <motion.video
                  key={`${project.title}-${mediaIndex}`}
                  src={mediaSrc}
                  autoPlay
                  muted={false}
                  controls
                  playsInline
                  preload="auto"
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    block
                    w-full
                    h-[250px]
                    sm:h-[350px]
                    md:h-[400px]
                    object-contain
                    bg-black
                  "
                />
              )}
            </AnimatePresence>

            {/* PREVIOUS — ONLY WHEN 2+ VIDEOS */}
            {showVideoArrows && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onPrevious();
                }}
                className="
                  absolute
                  left-3
                  sm:left-4
                  top-1/2
                  -translate-y-1/2
                  z-30
                  w-10
                  h-10
                  rounded-full
                  bg-black/60
                  border
                  border-white/20
                  text-white
                  text-[34px]
                  leading-none
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-[#2999c7]
                  hover:border-[#2999c7]
                  hover:scale-110
                "
                aria-label="Previous video"
              >
                ‹
              </button>
            )}

            {/* NEXT — ONLY WHEN 2+ VIDEOS */}
            {showVideoArrows && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNext();
                }}
                className="
                  absolute
                  right-3
                  sm:right-4
                  top-1/2
                  -translate-y-1/2
                  z-30
                  w-10
                  h-10
                  rounded-full
                  bg-black/60
                  border
                  border-white/20
                  text-white
                  text-[34px]
                  leading-none
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-[#2999c7]
                  hover:border-[#2999c7]
                  hover:scale-110
                "
                aria-label="Next video"
              >
                ›
              </button>
            )}

            {/* DOTS — ONLY WHEN 2+ VIDEOS */}
            {showVideoArrows && (
              <div
                className="
                  absolute
                  bottom-3
                  left-1/2
                  -translate-x-1/2
                  z-30
                  flex
                  gap-1.5
                "
              >
                {videoList.map((_, i) => (
                  <span
                    key={i}
                    className={`
                      w-1.5
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${i === mediaIndex ? "bg-[#2999c7] w-4" : "bg-white/40"}
                    `}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE — PROJECT INFO */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.title}-${mediaIndex}-info`}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                text-white
                md:pr-4
              "
            >
              <h2
                className="
                  text-[20px]
                  sm:text-[24px]
                  md:text-[28px]
                  font-bold
                  leading-tight
                "
              >
                {project.title}
              </h2>

              {project.date && (
                <p
                  className="
                    mt-2
                    text-white/80
                    text-[13px]
                    md:text-[15px]
                  "
                >
                  {project.date}
                </p>
              )}

              {/* {project.category && (
                <p
                  className="
                    mt-4
                    text-[#4db4d5]
                    text-[12px]
                    md:text-[14px]
                    font-semibold
                  "
                >
                  {project.category}
                </p>
              )} */}

              <div
                className="
                  mt-5
                  text-white/90
                  text-[14px]
                  md:text-[16px]
                  leading-[1.7]
                  whitespace-pre-line
                "
              >
                {project.description ||
                  "Description coming soon — Drive file ke 'Details' panel mein description likh do, ye yahan apne aap aa jaayegi."}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
