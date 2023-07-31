import { registerBlockExtension } from "@10up/block-components";
import { useState } from "@wordpress/element";
import ButtonSelect from "./components/ButtonSelect";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	TabPanel,
	ButtonGroup,
	Button,
	RangeControl,
} from "@wordpress/components";
import Icon from "./components/icons";
import "./style.scss";
import "./editor.scss";
import "./ui-style.scss";

const additionalAttributes = {
	hasResponsiveSettings: {
		type: "boolean",
		default: false,
	},
	responsiveAttributes: {
		type: "object",
		default: {
			flexDirection: {
				lg: "",
				md: "",
				sm: "",
			},
			flexWrap: {
				lg: "",
				md: "",
				sm: "",
			},
			alignItems: {
				lg: "",
				md: "",
				sm: "",
			},
			alignContent: {
				lg: "",
				md: "",
				sm: "",
			},
			justifyContent: {
				lg: "",
				md: "",
				sm: "",
			},
		},
	},
};

const BlockEdit = (props) => {
	const {
		attributes: { responsiveAttributes },
		setAttributes,
	} = props;
	const [activeTab, setActiveTab] = useState("desktop");

	const handleChange = (property, value) => {
		setAttributes({
			responsiveAttributes: {
				...responsiveAttributes,
				[property]: {
					...responsiveAttributes[property],
					[activeTab]: value,
				},
			},
		});
	};

	const setResponsiveSettings = (value) => {
		props.setAttributes({ hasResponsiveSettings: value });
	};
	const options = [
		{ label: "Row", value: "row", icon: Icon.Row },
		{ label: "Row Reverse", value: "row-reverse", icon: Icon.RowReverse },
		{ label: "Column", value: "column", icon: Icon.Column },
		{
			label: "Column Reverse",
			value: "column-reverse",
			icon: Icon.ColumnReverse,
		},
	];

	const properties = [
		{
			name: "flexDirection",
			label: "Flex Direction",
			type: "ButtonSelect",
			options: [
				{ label: "Row", value: "row", icon: Icon.Row },
				{ label: "Row Reverse", value: "row-reverse", icon: Icon.RowReverse },
				{ label: "Column", value: "column", icon: Icon.Column },
				{
					label: "Column Reverse",
					value: "column-reverse",
					icon: Icon.ColumnReverse,
				},
			],
		},
		{
			name: "flexWrap",
			label: "Flex Wrap",
			type: "ButtonSelect",
			options: [
				{ label: "No Wrap", value: "nowrap", icon: Icon.FlexNoWrap },
				{ label: "Wrap", value: "wrap", icon: Icon.FlexWrap },
			],
		},
		{
			name: "alignItems",
			label: "Align Items",
			type: "ButtonSelect",
			options: [
				// Add options for alignItems here
			],
		},
		{
			name: "alignContent",
			label: "Align Content",
			type: "ButtonSelect",
			options: [
				// Add options for alignContent here
			],
		},
		{
			name: "justifyContent",
			label: "Justify Content",
			type: "ButtonSelect",
			options: [
				{ label: "Center", value: "center", icon: Icon.JustifyCenter },
				{ label: "Flex Start", value: "flex-start", icon: Icon.JustifyFlexStart },
				{ label: "Flex End", value: "flex-end", icon: Icon.JustifyFlexEnd },
				{ label: "Space Between", value: "space-between", icon: Icon.JustifySpaceBetween },
				{ label: "Space Around", value: "space-around", icon: Icon.JustifySpaceAround },
				{ label: "Space Evenly", value: "space-evenly", icon: Icon.JustifySpaceEvenly },
			],
		},
	];

	return (
		<InspectorControls>
			<PanelBody title="Responsive Settings">
				<PanelRow>
					<ToggleControl
						label="Enable Responsive Settings"
						checked={props.attributes.hasResponsiveSettings}
						onChange={setResponsiveSettings}
					/>
				</PanelRow>
				{props.attributes.hasResponsiveSettings && (
					<>
						<TabPanel
							className="my-tab-panel"
							activeClass="active-tab"
							tabs={[
								{
									name: "lg",
									title: "Desktop",
									className: "tab-desktop",
								},
								{
									name: "md",
									title: "Tablet",
									className: "tab-tablet",
								},
								{
									name: "sm",
									title: "Mobile",
									className: "tab-mobile",
								},
							]}
						>
							{(tab) => {
								setActiveTab(tab.name.toLowerCase());
								return (
									<div>
										{properties.map(
											(property) =>
												property.options &&
												property.options.length > 0 && (
													<ButtonSelect
														label={property.label}
														options={property.options}
														selectedValue={
															responsiveAttributes[property.name][activeTab]
														}
														onChange={(value) =>
															handleChange(property.name, value)
														}
													/>
												)
										)}
									</div>
								);
							}}
						</TabPanel>
					</>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

const generateClassName = (attributes) => {
	let className = "";
	if (attributes.hasResponsiveSettings && attributes.responsiveAttributes) {
		for (const [property, devices] of Object.entries(
			attributes.responsiveAttributes
		)) {
			for (const [device, value] of Object.entries(devices)) {
				if (value) {
					// turn flexDirection to flex-direction
					let propertyName = property.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
					className += ` res-${propertyName}-${device}-${value}`;
				}
			}
		}
	}
	return className;
};

registerBlockExtension(["core/group", "core/column"], {
	extensionName: "responsive-settings",
	attributes: additionalAttributes,
	classNameGenerator: generateClassName,
	Edit: BlockEdit,
});
