import { View, FlatList } from "react-native";
import Render from "./Render";

const CustomDropdown = ({
  data,
  body,
  title,
  active,
}: {
  // اذا كنت باعت داتا
  // type بس هون حط
  data?: any;
  body: string[] | React.JSX.Element[];
  title: string;
  active: boolean;
  }) => {
  return (
    <View className=' overflow-hidden'>
      {/* *
       *
       *  اذا كان في داتا كبيرة منعطيه بس الداتا ومنعطيه العنوان وشو بدنا نحط بقلبو ومنعدل الداتا متل مابدنا
       *
       * */}
      {data ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Render
              active
              title={item.title}
              body={item.body}
            />
          )}
        />
      ) : (
        <Render
          title={title}
          body={body}
          active={active}
        />
      )}
    </View>
  );
};

export default CustomDropdown;
