import { test_tubes } from "@/assets";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="bg-brand-100 flex flex-col mt-6 [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_97%)]">
      <div className="w-full">
        <img
          src={test_tubes}
          alt="test-tubes"
          className="w-full rounded-lg [clip-path:polygon(0%_0%,_100%_0%,_100%_90%,_0%_100%)]"
        />
      </div>

      <div className="px-2 py-5">
        <div className="text-brand-primary">
          <p className="font-semibold py-2">One Record. One Care</p>
          <h1 className="text-4xl font-bold mb-4">
            Access Your Medical Records Anytime, Anywhere
          </h1>
          <p className="text-sm w-4/5">
            Log in to manage your health records, connect with your doctor, and
            access critical information in emergencies.
          </p>
        </div>
        <div className="flex gap-4 px-2 py-4">
          <Button className="border border-brand-primary bg-brand-primary text-white text-xs rounded-full cursor-pointer hover:bg-brand-300">
            Log In
          </Button>
          <Button className="border border-brand-primary text-brand-primary text-xs rounded-full cursor-pointer hover:bg-blue-100">
            Emergency Access
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
