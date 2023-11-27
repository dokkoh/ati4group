// import {
//   FormControl,
//   Checkbox,
//   Button,
//   VStack,
//   Heading,
//   HStack,
//   Input,
//   Text,
//   Divider
// } from "@chakra-ui/react";
// import React, { ReactElement } from "react";
// import { useForm, Controller } from "react-hook-form";
//
// const checkBoxArray = ["value one", "value two", "value three"];
//
// const defaultValues = {
//   "value one": false,
//   "value two": false,
//   "value three": false,
//
// };
//
// function Formtest() {
//   const { handleSubmit, control, reset } = useForm({
//     defaultValues
//   });
//
//   const onSubmit = handleSubmit((data) => {
//     console.log(data);
//     reset();
//   });
//
//   return (
//     <>
//       <Heading size="lg" mb="6">
//         CheckBox Array
//       </Heading>
//       <form onSubmit={onSubmit}>
//         <FormControl>
//           <VStack alignItems="flex-start">
//             {checkBoxArray.map((cbName) => {
//               return (
//                 <Controller
//                   control={control}
//                   name={cbName}
//                   key={cbName}
//                   defaultValue={false}
//                   render={({ field: { onChange, value, ref } }) => (
//                     <Checkbox
//                       onChange={onChange}
//                       textTransform="capitalize"
//                       ref={ref}
//                       isChecked={value}
//                     >
//                       {cbName}
//                     </Checkbox>
//                   )}
//                 />
//               );
//             })}
//           </VStack>
//         </FormControl>
//         <HStack mt="8" gridGap="full">
//           <Button outline="none" bg="red.100" type="submit">
//             Save & Reset
//           </Button>
//         </HStack>
//         <Divider mt="12" />
//         <Text mt="2" fontSize="xs" textTransform="capitalize">
//           check console after saving!
//         </Text>
//       </form>
//     </>
//   );
// }
//
// export default Formtest;
