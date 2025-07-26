export default async function Slug({ params }) {
  const { id } = await params;

  try {
    let response = await fetch(
      `https://68848c4c745306380a389657.mockapi.io/blog/${id}` // bu linke get isteği atıyorum (çağırıyorum)
    );
    var data = await response.json(); // response değişkeninin içindeki json türünde veriyi alıyorum.
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="bg-red-950">
      {data.title} {data.content}
    </div>
  );
}
