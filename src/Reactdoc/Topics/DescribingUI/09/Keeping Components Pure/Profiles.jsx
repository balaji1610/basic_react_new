import CardProfile from "./ConsProfile/CardProfile";
export default function Profiles() {
  return (
    <div>
      <CardProfile
        person={{
          imageUrl:
            "https://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg",
          name: "Nautural",
        }}
      />
      <CardProfile
        person={{
          imageUrl:
            "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
          name: "HTML",
        }}
      />
    </div>
  );
}
