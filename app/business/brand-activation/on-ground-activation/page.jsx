import NationHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import NationAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import NationEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import NationGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import Navbar from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";
export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#303030]">
      {/* =====================================================
          HERO
      ===================================================== */}

      {/* HEADER */}
      <Navbar />

      <NationHero
        title="Data Derived Customer Centric Solutions"
        description="
          At Wizcraft, we believe that meaningful experiences begin
          with understanding people. By combining data, technology,
          creativity and human insight, we create customer-centric
          solutions that connect brands with audiences in powerful
          and relevant ways.
        "
      />

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <NationAbout
        image1="/businessss/datapage/data1.jpg"
        image2="/businessss/datapage/data2.jpg"
        image3="/businessss/datapage/data3.jpg"
        paragraph1="
          At Wizcraft, our data-driven approach enables brands to
          understand their audiences better and create experiences
          that are meaningful, relevant and memorable. We combine
          audience intelligence with creativity to build
          customer-centric solutions that deliver stronger
          engagement and lasting connections.
        "
        paragraph2="
          From consumer insights and digital engagement to
          experiential campaigns and integrated brand experiences,
          our teams use data and technology to understand customer
          behaviour and transform those insights into impactful
          experiences.
        "
        paragraph3="
          Every solution is designed around the audience. Whether
          it is a large-scale event, digital activation, customer
          engagement programme or brand experience, Wizcraft brings
          together strategy, technology, creativity and execution
          to create measurable impact.
        "
      />

      
      {/* =====================================================
          GALLERY
      ===================================================== */}

      <NationGallery image="/businessss/datapage/data5.jpg" />

      {/* =====================================================
          EVENTS / CONTENT
      ===================================================== */}

      <NationEvents
        image="/businessss/datapage/data4.jpg"
        paragraph1="
          Data and technology are transforming the way brands
          connect with their audiences. Wizcraft develops
          customer-centric experiences by bringing together
          audience insights, technology, creativity and strategic
          thinking to create relevant and engaging brand
          interactions.
        "
        paragraph2="
          Our integrated approach helps organisations understand
          their customers, identify opportunities and build
          experiences that are designed around real audience needs.
          From digital activations to experiential campaigns,
          every touchpoint is carefully planned and executed.
        "
      />


      {/* =====================================================
          FINAL WHY CHOOSE SECTION
      ===================================================== */}

      <section
        className="
          w-full
          min-h-[260px]
          flex
          items-center
          justify-center
          px-5
          sm:px-8
          md:px-12
          bg-gradient-to-r
          from-[#247fbd]
          via-[#42a8c4]
          to-[#76c8a9]
        "
      >
        <p
          className="
            max-w-[1450px]
            text-center
            text-white
            font-normal
            text-[17px]
            sm:text-[19px]
            md:text-[23px]
            lg:text-[27px]
            leading-[1.65]
          "
        >
          With Wizcraft, data becomes more than information; it becomes the
          foundation for meaningful customer experiences, stronger engagement
          and lasting brand connections.
        </p>
      </section>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
