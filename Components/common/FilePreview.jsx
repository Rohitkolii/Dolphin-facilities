const FilePreview = ({ file }) => {
  if (file.mimeType.startsWith("image/")) {
    return (

      <img
        src={`https://lh3.googleusercontent.com/d/${file.id}=w1000?authuser=0`}
        alt={file.name}
        className="w-48 h-36 object-contain"
      />
    );
  }

  if (file.mimeType.startsWith("video/")) {
    return (
      <video
        controls
        className="w-96 rounded-lg"
        src={file.url}
      />
    );
  }

  return <p>Unsupported file type: {file.mimeType}</p>;
};

export default FilePreview;