import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "76bjrz8io3om",
    accessToken: process.env.REACT_APP_TOKEN,
    host: "cdn.contentful.com",
  });

  const getServices = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "landingPage",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const servicemedia = item.fields.servicemedia.fields;
        return { ...item.fields, servicemedia };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(error);
    }
  };
  return { getServices };
};

export default useContentful;
