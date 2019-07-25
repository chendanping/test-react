import React from "react";
import { autobind } from "core-decorators";
import {
  List,
  InputItem,
  WhiteSpace,
  ImagePicker,
  WingBlank,
  SegmentedControl,
  Button
} from "antd-mobile";
import { createForm } from "rc-form";

const data = [
  {
    url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
    id: "2121"
  },
  {
    url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
    id: "2122"
  }
];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: false
  };

  @autobind
  handleClick() {
    this.inputRef.focus();
  }

  @autobind
  onChange(files, type, index) {
    console.log(files, type, index);
    this.setState({
      files
    });
  }

  @autobind
  onSegChange(e) {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1
    });
  }

  @autobind
  submit(e) {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log("ok", values);
      } else {
        console.log("error", error, values);
      }
    });
  }

  render() {
    const { files } = this.state;
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <WingBlank>
        <SegmentedControl
          values={["切换到单选", "切换到多选"]}
          selectedIndex={this.state.multiple ? 1 : 0}
          onChange={this.onSegChange}
        />
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
        <div>
          <List renderHeader={() => "Format"}>
            <InputItem
              {...getFieldProps("bankCard", {
                initialValue: "8888 8888 8888 8888"
              })}
              type="bankCard"
            >
              银行卡
            </InputItem>
            <InputItem
              {...getFieldProps("phone", { rules: [{ required: true }] })}
              type="phone"
              placeholder="186 1234 1234"
            >
              手机号码
            </InputItem>
            <div style={{ color: "red" }}>
              {(getFieldError("phone") || []).join(", ")}
            </div>
            <InputItem
              {...getFieldProps("password")}
              type="password"
              placeholder="****"
            >
              密码
            </InputItem>
            <InputItem
              {...getFieldProps("number")}
              type="number"
              placeholder="click to show number keyboard"
            >
              数字键盘
            </InputItem>
            <InputItem
              {...getFieldProps("digit")}
              type="digit"
              placeholder="click to show native number keyboard"
            >
              数字键盘
            </InputItem>
          </List>

          <WhiteSpace />

          <Button type="primary" onClick={this.submit}>
            Submit
          </Button>
        </div>
      </WingBlank>
    );
  }
}
const ImagePickerExampleFrom = createForm()(ImagePickerExample);

export default ImagePickerExampleFrom;
