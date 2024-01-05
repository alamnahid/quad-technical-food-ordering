import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useForm } from "react-hook-form";

export function AddNewCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid},
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        handleOpen();

    }

    return (
        <>
            <p className='text-orange-700 font-medium text-xl flex justify-center items-center cursor-pointer bg-gray-50 px-3 py-3 rounded-2xl' onClick={handleOpen}>AddMore <IoIosArrowBack className='text-gray-500' /> <IoIosArrowForward className='text-gray-800' /></p>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="blue-gray">
                                Add New Item
                            </Typography>



                            {/* Item name  */}
                            <p className="text-[#444]  text-lg font-semibold">Item Name</p>
                            <input className="w-full  h-[3rem] text-gray-700 placeholder:text-sm placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border border-[#D0D0D0] bg-white" type="text" name="name" id="" placeholder="Item name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-800">This field is required</span>}


                            {/* price input  */}
                            <p className="text-[#444]  text-lg font-semibold">Price</p>

                            <input className="w-full h-[3rem] text-gray-700 placeholder:text-sm placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border border-[#D0D0D0] bg-white" type="number" name="price" id="" placeholder="Enter Price" {...register("price", { required: true })} />
                            {errors.price && <span className="text-red-800">This field is required</span>}


                            {/* is popular ?  */}

                            <p className="text-[#444] text-xl font-semibold">Is Popular?</p>
                            <select className="w-full h-[3rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1rem] rounded-lg border border-[#D0D0D0] pr-4 bg-white" {...register("ispopular", { required: true })}>
                                <option value="">Select...</option>
                                <option value="true">True</option>
                                <option value="false">False</option>

                            </select>
                            {errors.ispopular && <span>This field is required</span>}


                            {/* is recommended ?  */}

                            <p className="text-[#444] text-xl font-semibold">Is Recommended?</p>
                            <select className="w-full h-[3rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1rem] rounded-lg border border-[#D0D0D0] pr-4 bg-white" {...register("isrecommended", { required: true })}>
                                <option value="">Select...</option>
                                <option value="true">True</option>
                                <option value="false">False</option>

                            </select>
                            {errors.isrecommended && <span>This field is required</span>}


                            {/* Image input  */}

                            <p className="text-[#444] text-lg font-semibold">Image</p>

                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                            {errors.image && <span>This field is required</span>}

                        </CardBody>
                        <CardFooter className="pt-0">
                        <Button
                                type="submit"
                                variant=""
                                className={`bg-orange-700 text-white ${
                                    isValid ? '' : 'opacity-50 cursor-not-allowed'
                                }`}
                                fullWidth
                                disabled={!isValid}
                            >
                                Add Item
                            </Button>
                            
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </>
    );
}